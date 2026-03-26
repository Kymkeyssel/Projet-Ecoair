import { motion } from "framer-motion";
import { ExternalLink, Award, Globe, Building2, ChevronRight, Sparkles } from "lucide-react";
import BanerImage from "../asset/BG/Baner@0,75x.jpg";

export default function Expertise() {
  const projects = [
    {
      name: "Global soil partnership",
      url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC98731",
    },
    {
      name: "Panel Scientifique pour le Bassin du Congo",
      url: "https://www.spcongobasin.org",
    },
    {
      name: "Soil atlas of Africa",
      url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC98731",
    },
    {
      name: "Jeune Equipe Associée à l'IRD (JEAI)",
      url: "https://www.ird.fr/jeai-morphocam-morphogenese-et-denudation-pre-quaternaire-des-hauts-plateaux-du-cameroun",
    },
    {
      name: "Green Commodity Landscape Program (GCLP)",
      url: "https://fokabs.com/green-commodity-landscape-program-gclp/",
    },
    {
      name: "Projet OI-DDF 1",
      url: "https://forest4dev.org/wp-content/uploads/2024/05/Rapport_Atelier-de-restitution_FODER-CI_V08112021-P.pdf",
    },
    {
      name: "La biomasse forestière au laser",
      url: "https://lemag.ird.fr/fr/la-biomasse-forestiere-au-laser-0",
    },
    {
      name: "SAP005",
      url: "https://www.greenclimate.fund/project/sap005",
    },
    {
      name: "DRYAD",
      url: "https://www.worldagroforestry.org/project/dryad-financing-sustainable-community-forest-enterprises-cameroon",
    },
  ];

  const organizations = [
    {
      name: "CIFOR-ICRAF",
      url: "https://www.cifor-icraf.org",
    },
    {
      name: "CBI",
      url: "https://www.cbi.ucla.edu",
    },
    {
      name: "IRAM",
      url: "http://www.iram-fr.org/",
    },
    {
      name: "IITA",
      url: "https://www.iita.org",
    },
    {
      name: "IRD",
      url: "https://www.ird.fr",
    },
    {
      name: "IRGM",
      url: "https://irgm-cameroun.org",
    },
    {
      name: "IRAD",
      url: "https://irad.cm",
    },
    {
      name: "MMEC",
      url: "https://mississaugamining.com",
    },
    {
      name: "LAM",
      url: "https://www.lesafriquesdanslemonde.fr",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative min-h-[16vh] sm:min-h-[20vh] md:min-h-[35vh] text-white overflow-hidden rounded-2xl md:rounded-3xl shadow-xl mb-2 mx-2 sm:mx-3 md:mx-4 mt-2 sm:mt-3 md:mt-4 py-4 sm:py-8 md:py-16 px-3 sm:px-4"
            >
              <div className="absolute inset-0">
                <img
                  src={BanerImage}
                  alt="Notre Équipe"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "30% 50%", // 50% centre horizontal, 20% monte l'image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
              </div>
              <div className="relative z-10 mx-auto mt-16 text-center max-w-3xl px-4">
          <h1 className="text-3xl sm:text-2xl md:text-5xl text-gray-200 mb-12" style={{ fontFamily: 'Sniglet, cursive' }}>
              Notre <span className="text-emerald-300">Expertise</span>
            </h1>
               
              </div>
            </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        
        {/* Introduction Section - No title, just text */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200/50 rounded-full blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-200/80 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-green-100 border border-green-200 flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                  Bien que récemment constituée, EcoAir s'appuie sur une importante expertise cumulée de ses membres, à travers des publications scientifiques internationales, des programmes de recherche structurants et des missions de consultance pour des institutions nationales et internationales. Ce capital scientifique constitue le socle méthodologique des interventions d'EcoAir; il garantit la rigueur et l'efficacité de ses solutions, vers des actions mesurables à fort impact communautaire.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects and Organizations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Projets Nationaux et Internationaux */}
          <motion.section
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-green-200/50 rounded-full blur-2xl" />
            
            <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border border-green-200">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Projets nationaux et internationaux.
                </h2>
              </div>

              <ul className="space-y-3">
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 group-hover:text-green-700 transition-colors flex-1">
                        {project.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Organisations */}
          <motion.section
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-cyan-200/50 rounded-full blur-2xl" />
            
            <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 border border-cyan-200">
                  <Building2 className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Organisations dans lesquelles les membres ont exercé.
                </h2>
              </div>

              <ul className="space-y-3">
                {organizations.map((org, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 border border-gray-200 hover:border-cyan-300 transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 group-hover:text-cyan-700 transition-colors flex-1">
                        {org.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </motion.div>

        {/* Decorative bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <Sparkles className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}