import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";
import LogoEcocaf from "../asset/Logo Partenaire/ecocaf.jpeg";
import LogoMej from "../asset/Logo Partenaire/logo-mej.png";
import LogoEcoAir from "../asset/logo/logo.png"; // Placeholder pour le 3ème

export default function PartenairesAffiliations() {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      name: "ECOCAF",
      logo: LogoEcocaf,
      delay: 0,
      description: "Partenaire EcoCaf",
      link: "https://ecocaf-cm.org/",
    },
    {
      id: 2,
      name: "EcoAir & Vous",
      logo: LogoEcoAir,
      delay: 0.8,
      description: "Devenez partenaire !",
      isCenter: true, // Pour un style spécifique si besoin
    },
    {
      id: 3,
      name: "La MEJ",
      logo: LogoMej,
      delay: 1.5,
      description: "La Maison des Enfants et des Jeunes",
      scale: 1.4, // Agrandissement spécifique pour MEJ
      link: "https://lamej.netlify.app/",
    },
  ];

  // Animation flottante continue (yoyo)
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop", // ou "reverse" mais [0, -20, 0] est déjà une boucle
    },
  };

  return (
    <div className="min-h-[75vh] bg-gradient-to-b from-gray-200 to-white ">
      {/* Section Hero inchangée */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[14vh] sm:min-h-[20vh] md:min-h-[35vh] text-white overflow-hidden  rounded-3xl shadow-2xl mb-2 mx-4 mt-4 py-6 sm:py-10 md:py-16 px-4"
      >
        <div className="absolute inset-0">
          <img
            src={BanerImage}
            alt="Nos Partenaires"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "30% 80%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
        </div>
        <div className="relative z-10 mx-auto mt-16 text-center max-w-3xl px-4">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-200 mb-4">
            {t("nav.partners", "Nos Partenaires")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-200">
            {t("Ensemble pour une planète durable")}
          </p>
        </div>
      </motion.section>

      <div className="flex flex-col items-center py-8 relative overflow-hidden bg-white/50">
        {/* Cercles d'arrière-plan décoratifs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-16 md:gap-18"
        >
          {partners.map((partner) => {
            return (
              <motion.div
                key={partner.id}
                className={`flex flex-col items-center ${partner.isCenter ? "hidden md:flex" : "flex"}`}
                animate={{
                  y: [-15, 15, -15],
                }}
                transition={{
                  duration: 3 + partner.id,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: partner.delay,
                }}
              >
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`relative group w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full shadow-xl flex items-center justify-center p-4 sm:p-8 border-4 transition-all duration-500 hover:shadow-2xl hover:border-green-200 ${
                        partner.isCenter
                          ? "border-green-200 md:w-72 md:h-72"
                          : "border-green-50"
                      }`}
                    >
                      {/* Effet de lueur derrière */}
                      <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 rounded-full transition-colors duration-500" />

                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        style={{
                          transform: partner.scale
                            ? `scale(${partner.scale})`
                            : "scale(1)",
                        }}
                      />

                      {/* Indicateur visuel de lien externe au survol */}
                      {partner.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-green-500/20 rounded-full p-2">
                            {/* Optionnel: Icône de lien externe ici */}
                          </div>
                        </div>
                      )}
                    </div>
                    <h3
                      className={`mt-3 sm:mt-6 text-sm sm:text-xl md:text-2xl font-bold text-gray-700 text-center ${partner.isCenter ? "text-green-600 scale-110" : ""} group-hover:text-green-600 transition-colors`}
                    >
                      {partner.name}
                    </h3>
                    <p className="text-gray-500 text-[10px] sm:text-sm max-w-[100px] sm:max-w-xs text-center mt-1 sm:mt-2">
                      {partner.description}
                    </p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center group cursor-default">
                    <div
                      className={`relative group w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full shadow-xl flex items-center justify-center p-4 sm:p-8 border-4 transition-all duration-500 hover:shadow-2xl hover:border-green-200 ${
                        partner.isCenter
                          ? "border-green-200 md:w-72 md:h-72"
                          : "border-green-50"
                      }`}
                    >
                      {/* Effet de lueur derrière */}
                      <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 rounded-full transition-colors duration-500" />

                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        style={{
                          transform: partner.scale
                            ? `scale(${partner.scale})`
                            : "scale(1)",
                        }}
                      />
                    </div>
                    <h3
                      className={`mt-3 sm:mt-6 text-sm sm:text-xl md:text-2xl font-bold text-gray-700 text-center ${partner.isCenter ? "text-green-600 scale-110" : ""} group-hover:text-green-600 transition-colors`}
                    >
                      {partner.name}
                    </h3>
                    <p className="text-gray-500 text-[10px] sm:text-sm max-w-[100px] sm:max-w-xs text-center mt-1 sm:mt-2">
                      {partner.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-6 md:mt-2 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 md:px-10 md:py-5 rounded-full shadow-lg border border-green-200 text-sm md:text-lg">
            <p className="text-green-800 font-medium">
              Rejoignez notre mission pour un avenir vert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
