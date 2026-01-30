import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Users,
  Tag,
  Target,
  Info,
  AlertTriangle,
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
  Globe,
  Users as UsersIcon,
  Mountain,
  Home,
  Droplets,
} from "lucide-react";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";
import img1P1 from "../asset/Projet 1/APDC1776.JPG.jpeg";
import img2P1 from "../asset/Projet 1/CIMG1195.JPG.jpeg";
import img3P1 from "../asset/Projet 1/IMG_20210322_154238.jpg.jpeg";
import img4P1 from "../asset/Projet 1/IMG_20210322_154414.jpg.jpeg";
import img1P2 from "../asset/Projet 2/image 1.jpeg";
import img2P2 from "../asset/Projet 2/image 2.jpg.jpeg";

export default function Projets() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      year: "Annee",
      category: "Exploitation Minière • Développement Durable",
      title: "REMIND",
      subtitle:
        "Ressources minérales et enjeux d'une exploitation durable sur le plateau Sud Camerounais",
      description: "--petite description--",
      // Nouvelles sections Projet 1
      contexte:
        "L’Afrique centrale concentre >30 % des métaux stratégiques pour la transition énergétique. Au Cameroun, >160 permis miniers ont été délivrés. Parallèlement, les autorisations d’exploitation artisanales de substances minérales ont explosé, avec 422 pour les seules Régions du Sud et de l’Est en 2016. Dans ce contexte, ≈95 % des sites restent artisanaux (EMAPE : Exploitation Minière Artisanale et à Petite Echelle), entraînant déforestation (>10 000 ha/an), pollution des sols et eaux, exposition de >300 000 personnes aux risques sanitaires, aux perturbations de la radioactivité naturelle des roches, et perte de patrimoine.La majorité des organisations se limitent à mesurer les impacts et proposer une meilleure gouvernance. REMIND va plus loin. Nous concilions science, solutions fondées sur la nature, et innovations pour améliorer la connaissance des gisements, réinventer l’extraction de l’or et des métaux critiques, et promouvoir une restauration guidée par les données de pointe.",
      solutions: [
        "Cartographie & modélisation avancées : compréhension précise des gisements et étude de la faisabilité environnementale de leur exploitation .",
        "Suivi des flux métalliques dans les sols, eaux et chaînes trophiques : compréhension des perturbations anthropiques des échanges opérant à la zone critique (interface roche-sol), compréhension du fonctionnement biogéochimique des écosystèmes et des bassins versants .",
        "Extraction minérale bio-inspirée : prototypes pilotes d’évaluation de la phyto-extraction, bio-sorption ou biométallurgie microbienne visant à réduire de >80 % l’usage des réactifs chimiques de concentration minérale.",
        "Bio-extraction sur sites pollués : phyto-accumulation, pour dépolluer par production des biomasses métallifères .",
        "Renforcement des capacités : chercheurs, institutions, communautés locales et artisans miniers formés à des pratiques guidées par la donnée .",
      ],
      resultatsAttendus: [
        "Conformité environnementale pilotée sur ≥30 % des sites ciblés",
        "Réduction mesurable des concentrations métalliques dans les interfaces sol-eau",
        "Diminution de l’exposition humaine aux métaux lourds",
        "Adoption de techniques innovantes d’extraction et de remédiation",
      ],
      impactsLongTerme: [
        "Protection des écosystèmes critiques et des ressources en eau",
        "Santé et bien-être des communautés améliorés",
        "Gouvernance minière durable, transparente et participative",
        "Contribution à la transition énergétique mondiale sans intensification des dommages écologiques",
      ],
      bonASavoir: [
        "REMIND n’est pas plateforme de recommandations. Nous fournissons des outils concrets, des solutions innovantes et des modèles exportables, transformant l’exploitation minière au Cameroun et inspirant une nouvelle norme pour l’Afrique centrale",
      ],

      teamSize: "--nombre de memebres prenant part au projet--",
      status: "--statut du projet--",
      images: [img1P1, img2P1, img3P1, img4P1],
      color: "from-blue-600 to-indigo-700",
      icon: Mountain,
    },
    {
      id: 2,
      number: "02",
      year: "--annee--",
      category: "--categorie--",
      title: "RegoRisk",
      subtitle:
        "Science, gouvernance et communautés pour refonder la chaîne de prévention des glissements de terrain et des pertes de terres à l'Ouest Cameroun",
      description: "--petite description--",
      // Nouvelles sections Projet 2
      contexteProbleme:
        "Dans les hautes terres de l’Ouest Cameroun, les régimes pluviométriques évoluent rapidement. L’augmentation des précipitations cumulées et l’occurrence d’événements extrêmes conduisent à une dynamique inhabituelle des processus de surface de la terre, favorisant des glissements de terrain dans des zones auparavant jugées non critiques. Les alertes institutionnelles, notamment celles émises par les services nationaux et l’ONACC, témoignent de l’accroissement de ces risques dans un contexte de dérive climatique. Face à cette nouvelle réalité, les outils historiques de cartographie du risque, basés sur des moyennes climatiques dépassées et sur la morphologie, ne permettent plus d’anticiper l’aléa.",
      hypotheseChangement:
        "La théorie du changement qui sous-tend notre initiative part de ce constat : pour protéger les populations et guider l’aménagement, il ne suffit plus d’observer la pluie, la pente ou l’occupation du sol. Il devient nécessaire de comprendre la dynamique propre des matériaux superficiels face aux contraintes devenues évolutives. Le régolithe, son histoire géologique, sa densité, sa cohésion, sa structure interne et son épaisseur, son humidité résiduelle constituent désormais des variables essentielles pour caractériser et adapter la susceptibilité au contexte changeant. Les moyens indirects et in-situ d’observation et de mesure de ces propriétés apportent ici un levier nouveau et déterminant. A des échelles régionales, ils rendent visibles ces propriétés invisibles mais gouvernantes, telles que la cartographie 3D de la stratification des horizons de régolithe qui délimite de potentielles surfaces de glissement",
      voiesChangement: [
        "L’introduction de ces contraintes physiques dans les modèles permet de recalibrer les cartes de susceptibilité, d’améliorer la localisation des zones à risque et d’offrir des informations exploitées directement par les communes, les services techniques et les institutions de gestion du territoire.",
      ],
      resultatsAttendus: [
        "À terme, les autorités disposent d’outils d’aide à la décision plus fiables pour réguler l’urbanisation des pentes, planifier les infrastructures et réduire l’exposition des ménages. Pour les communautés, cette évolution technique se traduit par des pratiques d’aménagement plus sûres et une meilleure anticipation des phénomènes.",
      ],
      impactFinal: [
        "En rendant compte des conditions réelles du terrain dans un climat qui change, le projet contribue ainsi à renforcer la résilience territoriale, à réduire les vulnérabilités et à rétablir un rapport plus sûr entre la société et son territoire.",
      ],
      creditImage: ["SDN/JC (Image 1)", "BBC News (Image 2)"],

      teamSize: "--nombre de memebres prenant part au projet--",
      status: "--statut du projet--",
      images: [img1P2, img2P2],
      color: "from-amber-600 to-orange-700",
      icon: AlertTriangle,
    },
  ];

  // Auto-rotate images for each project
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const newIndices = { ...prev };
        projects.forEach((project) => {
          const currentIdx = newIndices[project.id] || 0;
          newIndices[project.id] = (currentIdx + 1) % project.images.length;
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const SectionIcon = ({ icon: Icon, color }) => (
    <div className={`p-1.5 rounded-lg ${color} flex-shrink-0`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
  );

  return (
    <div className="min-h-[70vh] overflow-hidden">
      {/* Header Section */}
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
            alt="Nos Projets"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "30% 80%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 px-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-100 mb-1 sm:mb-2 md:mb-4 text-center">
            Nos Projets
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 max-w-2xl mx-auto text-center px-2">
            Initiatives stratégiques pour un développement résilient et durable
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative z-10 min-h-[80vh] flex flex-col">
        {/* Carousel Section */}
        <div className="flex-1 flex items-center justify-center px-1 sm:px-2 md:px-4 lg:px-8 pb-8 sm:pb-12 md:pb-20">
          <div className="w-full max-w-9xl relative">
            {/* Cards Stack */}
            <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              {projects.map((project, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);

                const zIndex = projects.length - absOffset;
                let scale = 1 - absOffset * 0.15; // LET au lieu de CONST
                let opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.5 : 0.2; // LET au lieu de CONST
                const translateY = absOffset * 20;
                const translateX = offset * 30;

                if (absOffset > 2) {
                  opacity = 0;
                  scale = 0.6;
                }

                const currentImageIndex = imageIndices[project.id] || 0;

                return (
                  <div
                    key={project.id}
                    className="absolute w-full max-w-5xl sm:max-w-6xl md:max-w-7xl transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      zIndex,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      pointerEvents: absOffset === 0 ? "auto" : "none",
                    }}
                    onClick={() => absOffset !== 0 && goToProject(index)}
                  >
                    {/* Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden">
                      <div className="flex flex-col md:grid md:grid-cols-2 min-h-[300px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px]">
                        {/* Left Side - Text Content */}
                        <div className="p-3 sm:p-4 md:p-6 lg:p-12 flex flex-col justify-between order-2 md:order-1">
                          {/* Project Number and Title */}
                          <div className="mb-2 sm:mb-3">
                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-green-500 mb-2 sm:mb-3">
                              <span className="text-base sm:text-lg md:text-xl font-bold text-green-600">
                                {project.number}
                              </span>
                            </div>
                            <div className="mb-1 sm:mb-2">
                              <p className="text-[10px] sm:text-xs text-gray-600 font-medium mb-1">
                                {project.year} • {project.category}
                              </p>
                            </div>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-700 mb-1 leading-tight">
                              {project.title}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-700 italic mb-2">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* Short Description */}
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-1">
                            {project.description}
                          </p>

                          {/* CTA Button */}
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center justify-center gap-1 sm:gap-2 text-blue-600 hover:text-green-400 font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 group w-fit"
                          >
                            <span className="tracking-wide uppercase">
                              Explorer le projet
                            </span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden order-1 md:order-2 h-[200px] sm:h-[250px] md:h-full isolation-isolate">
                          {/* Image with transition */}
                          <div className="relative h-full">
                            {project.images.map((img, imgIdx) => (
                              <img
                                key={`${project.id}-${imgIdx}`}
                                src={img}
                                alt={`${project.title} - Image ${imgIdx + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                                style={{
                                  opacity: imgIdx === currentImageIndex ? 1 : 0,
                                  zIndex: imgIdx === currentImageIndex ? 1 : 0,
                                }}
                              />
                            ))}
                          </div>
                          {/* Image indicators */}
                          <div className="absolute bottom-2 right-2 flex gap-1 z-20">
                            {project.images.map((_, imgIdx) => (
                              <div
                                key={imgIdx}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  imgIdx === currentImageIndex
                                    ? "w-4 sm:w-6 bg-white"
                                    : "w-1 sm:w-1.5 bg-white/50"
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-1 right-1 sm:left-2 sm:right-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50">
              <button
                onClick={prevProject}
                className="pointer-events-auto bg-green-200/80 hover:bg-green-300 text-green-900 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextProject}
                className="pointer-events-auto bg-amber-200/80 hover:bg-amber-300 text-blue-900 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Projet suivant"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 md:h-2.5 bg-green-600"
                      : "w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-full w-full max-h-[90vh] sm:max-h-[85vh] md:max-w-5xl overflow-y-auto animate-scale-in my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl">
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-50`}
              ></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-3 md:right-3 bg-white/90 hover:bg-white text-gray-800 p-1 sm:p-1.5 rounded-full transition-all duration-200 hover:scale-110 shadow-md z-10"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>

              {/* Project Header */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1 sm:mb-1.5 md:mb-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white">
                    <span className="text-sm sm:text-base md:text-lg font-bold text-white">
                      {selectedProject.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-white/90 text-[10px] sm:text-xs md:text-sm font-medium">
                      {selectedProject.year} • {selectedProject.category}
                    </p>
                  </div>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h2>
                <p className="text-white/80 text-xs sm:text-sm italic">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
              {/* Project Overview */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    Aperçu du Projet
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Status and Team Info */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 border border-blue-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-blue-600 p-1 sm:p-1.5 rounded">
                      <UsersIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-wide">
                        Équipe
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-blue-900">
                        {selectedProject.teamSize}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 border border-green-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-green-600 p-1 sm:p-1.5 rounded">
                      <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-wide">
                        Statut
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-green-900">
                        {selectedProject.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projet 1: REMIND Sections */}
              {selectedProject.id === 1 && (
                <>
                  {/* Contexte */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Globe} color="bg-blue-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Contexte
                      </h3>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      {selectedProject.contexte}
                    </p>
                  </div>

                  {/* Nos solutions cutting-edge */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={TrendingUp} color="bg-green-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Nos solutions cutting-edge
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.solutions.map((solution, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-1">
                            {solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Résultats attendus (3–5 ans) */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Target} color="bg-amber-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Résultats attendus (3–5 ans)
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {selectedProject.resultatsAttendus.map(
                        (resultat, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-2 sm:p-3 border border-amber-100"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                              <span className="text-xs sm:text-sm font-semibold text-amber-800">
                                Objectif {index + 1}
                              </span>
                            </div>
                            <p className="text-gray-700 text-xs sm:text-sm">
                              {resultat}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Impacts long terme (10+ ans) */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Clock} color="bg-purple-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Impacts long terme (10+ ans)
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.impactsLongTerme.map((impact, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
                        >
                          <div className="text-purple-600 font-bold text-sm sm:text-base">
                            {index + 1}.
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-1">
                            {impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bon à savoir */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Info} color="bg-teal-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Bon à savoir
                      </h3>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-teal-200">
                      <div className="space-y-2 sm:space-y-3">
                        {selectedProject.bonASavoir.map((info, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <div className="text-teal-600 mt-0.5">•</div>
                            <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-1">
                              {info}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Projet 2: RegoRisk Sections */}
              {selectedProject.id === 2 && (
                <>
                  {/* Contexte et problème */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={AlertTriangle} color="bg-red-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Contexte et problème
                      </h3>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      {selectedProject.contexteProbleme}
                    </p>
                  </div>

                  {/* Hypothèse de changement */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={BarChart3} color="bg-orange-500" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Hypothèse de changement
                      </h3>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-200">
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base italic leading-relaxed">
                        "{selectedProject.hypotheseChangement}"
                      </p>
                    </div>
                  </div>

                  {/* Voies de changement */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Shield} color="bg-green-600" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Voies de changement
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.voiesChangement.map((voie, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100"
                        >
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-1">
                            {voie}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Résultats attendus */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Target} color="bg-blue-600" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Résultats attendus
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.resultatsAttendus.map(
                        (resultat, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                            </div>
                            <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-1">
                              {resultat}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Impact final */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Home} color="bg-purple-600" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Impact final
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {selectedProject.impactFinal.map((impact, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-2 sm:p-3 border border-purple-100"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                            <span className="text-xs sm:text-sm font-semibold text-purple-800">
                              Impact {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Crédit image */}
                  <div className="mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <SectionIcon icon={Droplets} color="bg-gray-600" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        Crédit image
                      </h3>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {selectedProject.creditImage.join(" • ")}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Image Gallery */}
              {selectedProject.images.length > 1 && (
                <div className="mt-4 sm:mt-5 md:mt-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-0.5 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                      Galerie du projet
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded sm:rounded-md md:rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper component for check icon
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
