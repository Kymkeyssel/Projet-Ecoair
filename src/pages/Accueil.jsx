import {
  ArrowRight,
  Target,
  Users,
  Sprout,
  TreePine,
  Droplets,
  Map,
  ChevronLeft,
  ChevronRight,
  UsersRound,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BgImage1 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_IMG_20200129_101529.jpg";
import BgImage2 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_DSC_0372.jpg"; // à remplacer
import BgImage3 from "../asset/ImagesEquipe/Dr Elida/thumbnail_S6.jpg"; // à remplacer
import BgImage4 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_DSC_0415 - Copie.jpg"; // à remplacer
import BgImage5 from "../asset/ImagesEquipe/Dr MOMO/IMG-20220401-WA0022.jpg"; // à remplacer
import Navbar from "../components/Navbar";
import logo from "../asset/logo/logo.png";

export default function Accueil({ onNavigate }) {
  // Définir les images du carrousel
  const carouselImages = [BgImage1, BgImage2, BgImage3, BgImage4, BgImage5];

  // État pour l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  };

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Fonction pour aller à une image spécifique
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const domains = [
    {
      icon: Droplets,
      title: "Eau, assainissement et santé environnementale ",
      description:
        "Accès à l’eau potable et de proximité via des systèmes écologiques intégrés ; formation à l’hygiène, gouvernance locale de l’eau.",
    },
    {
      icon: Sprout,
      title: "Sols, biodiversité & usages",
      description:
        "Inventaires des types de sols et étude de leurs dynamiques anthropogènes, pratiques d’usage, et impacts sur la biodiversité et sur les systèmes hydriques.",
    },
    {
      icon: TreePine,
      title: "Climat, forêt & résilience ",
      description:
        "Sensibilisation, co-construction de plans communautaires d’adaptation, valorisation des ressources et services écosystémiques.",
    },
    {
      icon: Map,
      title: "Environnements Miniers",
      description:
        "Transformer les zones minières impactées en laboratoires de science et de durabilité.",
    },
    {
      icon: UsersRound,
      title: "Mobilisation communautaire ",
      description:
        "Campagnes d’information, éducation et communication, initiatives solidaires au profit des communautés.",
    },
  ];

  const objectives = [
    "valoriser la complémentarité des expertises interdisciplinaires pour co-construire des solutions durables, adaptées aux enjeux complexes de la gestion des ressources naturelles et du développement communautaire ",
    "évaluer les perturbations anthropiques et climatiques sur les écosystèmes et leurs interactions ;",
    "Promouvoir la sensibilisation environnementale à toute échelle",
    "promouvoir le développement de l’auto-emploi au sein des communautés par le biais d’animations et d’implantations structurelles de proximité.",
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4">
        <Navbar transparent onNavigate={onNavigate} />
      </div>

      {/* HERO SECTION AVEC CARROUSEL */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-[100vh] flex flex-col justify-center items-center text-center"
      >
        {/* Carrousel d'images */}
        <div className="absolute inset-0 overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}

          {/* Overlay sombre avec gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Contrôles du carrousel */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Image précédente"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Image suivante"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicateurs de pagination */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-green-400 scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-32 pb-20 px-4">
          {/* Logo au lieu du texte EcoAir */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 animate-bounce" style={{ animationDuration: "2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-amber-600/30 rounded-full blur-2xl animate-pulse"></div>
            <img
              src={logo}
              alt="EcoAir Logo"
              className="w-full h-full object-contain relative z-10 drop-shadow-3xl animate-pulse"
            />
          </div>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg sm:text-lg lg:text-2xl md:text-3xl mb-2 md:mb-8 text-green-100 font-light drop-shadow-lg leading-tight">
            Ecosystems and Communities Action for Innovative Research and
            Development
          </p>
          <p className="text-lg sm:text-lg lg:text-2xl md:text-3xl text-green-200 italic drop-shadow-lg md:mb-12 leading-tight">
            Action Écosystémique et Communautaire pour une Recherche et un
            Développement Innovants
          </p>
          <h1>
            <p className="text-xl text-green-500 font-extrabold ">
              “Une Action Locale pour un Impact Global”
            </p>
          </h1>
          <p className="text-xs sm:text-sm lg:text-2xl md:text-3xl mb-10 leading-relaxed text-green-50 max-w-3xl mx-auto drop-shadow">
            Association écologiste à but non lucratif et à vocation nationale
            créée au Cameroun (Région du Centre) sous la Déclaration
            N°002100/RDA/J06/SAAJP/BAPP du 22 octobre 2025.
          </p>

          <div className="flex flex-nowrap gap-2 md:gap-4 justify-center w-full px-2">
            <button
              onClick={() => onNavigate("apropos")}
              className="bg-white/90 text-green-700 px-3 py-2 md:px-8 md:py-4 rounded-full font-semibold hover:bg-green-200 transition-all flex items-center space-x-1 md:space-x-2 shadow-lg text-xs md:text-lg animate-pulse whitespace-nowrap"
              style={{ animationDuration: "2s" }}
            >
              <span>Qui sommes nous?</span>
              <ArrowRight className="h-3 w-3 md:h-5 md:w-5" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="border-2 border-white text-white px-3 py-2 md:px-8 md:py-4 rounded-full font-semibold hover:bg-amber-600 hover:text-green-200 transition-all text-xs md:text-lg whitespace-nowrap"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </motion.section>

      {/* Reste du code inchangé */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
              Domaines d'Intervention
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="bg-amber-500 backdrop-blur-2xl p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-green-500"
              >
                <domain.icon className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-sm md:text-lg font-bold text-white mb-2 leading-tight">
                  {domain.title}
                </h3>
                <p className="text-white text-sm leading-relaxed hidden md:block">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("apropos")}
              className="bg-gradient-to-br from-cyan-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>En savoir plus</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
                Nos Objectifs
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                « EcoAir » se projette dans une société dans laquelle les
                communautés vivent de façon harmonieuse par l’accompagnement et
                la formation sur la transformation durable de leurs écosystèmes.
                Plus précisément, il s’agit de :
              </p>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-amber-700 p-10 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl text-green-900 font-bold mb-6">
                Pourquoi EcoAir ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="text-2xl">✓</div>
                  <span>
                    Experts de divers domaines liés à la gestion durable
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-2xl">✓</div>
                  <span>Solutions endogènes et innovantes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-2xl">✓</div>
                  <span>
                    Réseau de partenaires scientifiques internationaux
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-2xl">✓</div>
                  <span>Projets à forts impacts communautaires</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate("apropos")}
                className="mt-8 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors w-full"
              >
                Découvrir Notre Organisation
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
