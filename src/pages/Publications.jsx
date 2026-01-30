import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Download, FileText, Image, Video, Calendar } from "lucide-react";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Publication() {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Configuration Drive

  const FOLDER_ID = "1-w3sNpp3SKs6AMZ9q7oN-VVcwEV_g8XM";
  const API_KEY = "AIzaSyBffb0puBfJ_fDgxaF4jVAv7YX4gkIZOto";

  useEffect(() => {
    async function fetchFiles() {
      try {
        // Récupérer tous les fichiers (PDF, images, vidéos)
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+(mimeType contains 'application/pdf' or mimeType contains 'image/' or mimeType contains 'video/')&fields=files(id,name,mimeType,modifiedTime,webViewLink,webContentLink)&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        // Trier par date de modification (du plus récent au plus ancien)
        const sortedFiles = (data.files || []).sort(
          (a, b) => new Date(b.modifiedTime) - new Date(a.modifiedTime),
        );

        setFiles(sortedFiles);
      } catch (error) {
        console.error("❌ Erreur lors du chargement des publications :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();

    // Rafraîchissement automatique toutes les 5 minutes
    const interval = setInterval(fetchFiles, 300000);
    return () => clearInterval(interval);
  }, []);

  // Fonction pour obtenir l'URL d'affichage selon le type
  const getPreviewUrl = (file) => {
    if (file.mimeType.includes("pdf")) {
      return `https://drive.google.com/file/d/${file.id}/preview`;
    } else if (file.mimeType.includes("video")) {
      return `https://drive.google.com/file/d/${file.id}/preview`;
    } else if (file.mimeType.includes("image")) {
      // Meilleure méthode pour les images
      return `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;
    }
    return `https://drive.google.com/file/d/${file.id}/preview`;
  };

  // Fonction pour obtenir l'icône selon le type
  const getFileIcon = (mimeType) => {
    if (mimeType.includes("pdf")) return <FileText className="w-5 h-5" />;
    if (mimeType.includes("image")) return <Image className="w-5 h-5" />;
    if (mimeType.includes("video")) return <Video className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-[30vh] bg-gray-50">
      {/* --- HEADER RESPONSIVE --- */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-[16vh] sm:min-h-[20vh] md:min-h-[35vh] text-white overflow-hidden rounded-2xl md:rounded-3xl shadow-xl mb-2 mx-2 sm:mx-3 md:mx-4 mt-2 sm:mt-3 md:mt-4 py-4 sm:py-8 md:py-16 px-3 sm:px-4"
      >
        {" "}
        <div className="absolute inset-0">
          <img
            src={BanerImage}
            alt="Notre Équipe"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "30% 80%", // 50% centre horizontal, 20% monte l'image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
        </div>
        <div className="relative z-10 mx-auto mt-16 text-center max-w-3xl px-4">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-200 mb-4">
            {t("Nos Publications")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-200">
            {t("📍 Contenu synchronisé automatiquement avec le Drive")}
          </p>
        </div>
      </motion.section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-6">
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Chargement des publications...
            </p>
          </div>
        )}

        {!loading && files.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow px-4">
            <p className="text-gray-500 text-base sm:text-lg">
              Aucune publication disponible pour le moment.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Ajoutez des fichiers dans le dossier Drive pour les voir ici.
            </p>
          </div>
        )}

        {/* --- GRILLE 2 COLONNES RESPONSIVE --- */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {files.map((file) => {
            const title = file.name.replace(/\.[^/.]+$/, "");
            const isPDF = file.mimeType.includes("pdf");
            const isImage = file.mimeType.includes("image");
            const isVideo = file.mimeType.includes("video");

            return (
              <div
                key={file.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* HEADER DE LA CARTE */}
                <div className="p-3 sm:p-4 md:p-6 border-b border-gray-100">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="text-green-600">
                      {getFileIcon(file.mimeType)}
                    </div>

                    <h2 className="text-[11px] sm:text-sm md:text-lg font-bold text-gray-800 line-clamp-2 leading-tight">
                      {title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm text-gray-500">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Mis à jour le {formatDate(file.modifiedTime)}</span>
                  </div>
                </div>

                {/* MEDIA RESPONSIVE */}
                <div className="flex-1 p-3 sm:p-4 md:p-6">
                  {isPDF && (
                    <iframe
                      src={getPreviewUrl(file)}
                      title={title}
                      className="w-full h-[160px] sm:h-[220px] md:h-[500px] rounded-lg border"
                      frameBorder="0"
                      allow="autoplay"
                    />
                  )}

                  {isImage && (
                    <img
                      src={getPreviewUrl(file)}
                      alt={title}
                      className="w-full h-[140px] sm:h-[200px] md:h-[260px] object-cover rounded-lg border hover:scale-105 transition-transform duration-300"
                      onError={(e) =>
                        (e.target.src = `https://drive.google.com/uc?export=view&id=${file.id}`)
                      }
                    />
                  )}

                  {isVideo && (
                    <iframe
                      src={getPreviewUrl(file)}
                      title={title}
                      className="w-full h-[140px] sm:h-[200px] md:h-[260px] rounded-lg border"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* ACTIONS */}
                <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-100">
                  <div className="flex gap-2">
                    <a
                      href={`https://drive.google.com/uc?export=download&id=${file.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-2 py-2 sm:px-3 sm:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      Télécharger
                    </a>

                    <a
                      href={`https://drive.google.com/file/d/${file.id}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 sm:px-3 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                    >
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                      Voir
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info synchronisation */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            🔄 Synchronisation avec le Drive • {files.length} publication(s)
          </p>
        </div>
      </section>
    </div>
  );
}
