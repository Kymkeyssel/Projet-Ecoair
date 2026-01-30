import React, { useState, useEffect } from "react";
import {
  Calendar,
  Award,
  Users,
  Globe,
  Target,
  BookOpen,
  Droplets,
  Sprout,
  CloudRain,
  Mountain,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";

export default function APropos({ scrollToSection }) {
  // État pour gérer les sections dépliables globales (Atouts, Objectifs)
  const [expandedSections, setExpandedSections] = useState({
    atouts: false,
    objectifs: false,
  });

  // État pour gérer les items individuels dépliables (Axes, Domaines)
  const [expandedItems, setExpandedItems] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openModal = (id) => {
    if (isMobile) setActiveModal(id);
  };

  const closeModal = () => setActiveModal(null);

  // Effet pour scroller vers la section si spécifiée
  React.useEffect(() => {
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Si pas de section spécifiée, scroll en haut
      window.scrollTo(0, 0);
    }
  }, [scrollToSection]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const values = [
    { name: "Responsabilité", icon: Target },
    { name: "Transparence", icon: BookOpen },
    { name: "Partenariat", icon: Users },
    { name: "Non-violence", icon: Globe },
  ];

  const actions = [
    "Réalisation d'études environnementales participatives",
    "Organisation d'ateliers de formation et de renforcement de capacités",
    "Mise en place de projets pilotes de restauration écologique",
    "Création de plateformes d'innovation vers l'économie verte",
    "Organisation et suivi des campagnes de sensibilisation et d'éducation environnementale",
    "Elaboration de guides et outils de gouvernance locale des ressources",
  ];

  return (
    <div className="min-h-screen overflow-hidden">
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
              objectPosition: "30% 80%", // 50% centre horizontal, 20% monte l'image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
        </div>
        <div className="relative z-10 mx-auto mt-16 text-center max-w-3xl px-4">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-200 mb-4">
            À Propos d'EcoAir
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-200">
            Une organisation dédiée à la transformation durable des écosystèmes
            et au développement des communautés au Cameroun et dans le Bassin du
            Congo.
          </p>
        </div>
      </motion.section>

      {/* Notre Organisation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="organisation"
        className="py-6 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
                Notre Organisation
              </h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p>
                    <strong>Active depuis Octobre 2025</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Regroupe les Experts de divers domaines liés à la gestion durable des ressources naturelles et du développement social.",
                    "Apporte des solutions scientifiques, endogènes et innovantes pour renforcer la résilience écologique et sociale des communautés au Cameroun, et dans le Bassin du Congo.",
                    "Œuvre dans l'accompagnement/formation sur la transformation durable des écosystèmes.",
                    "Dispose d’un grande expertise en consultances pour le développement.",
                    "Dispose d’un important réseau de partenaires scientifiques et techniques, nationaux et internationaux.",
                    "Conduit des projets à moyens et à longs termes à forts impacts communautaires.",
                  ].map((item, index) => (
                    <p key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Nos Atouts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-amber-50 p-4 md:p-8 rounded-xl border border-amber-100"
            >
              <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection("atouts")}
              >
                <div className="flex items-center">
                  <Award className="h-8 w-8 md:h-12 md:w-12 text-green-600 mb-0 md:mb-4 mr-3 md:mr-0" />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-0 md:mb-4">
                    Nos Atouts
                  </h3>
                </div>
                {/* Chevron visible uniquement sur mobile */}
                <div className="md:hidden">
                  {expandedSections.atouts ? (
                    <ChevronUp className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                  )}
                </div>
              </div>

              <ul
                className={`space-y-3 mt-4 md:mt-0 ${expandedSections.atouts ? "block" : "hidden md:block"}`}
              >
                {[
                  "Grande expertise en consultances pour le développement",
                  "Important réseau de partenaires scientifiques et techniques, nationaux et internationaux",
                  "Conduit des projets à moyens et à longs termes à forts impacts communautaires",
                  "Approches interdisciplinaires et innovantes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="bg-white rounded-full w-1 h-1 md:w-1.5 md:h-1.5"></div>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision et Objectifs */}
      <motion.section
        id="objectifs"
        className=" px-4 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="cursor-pointer md:cursor-default"
            onClick={() => toggleSection("objectifs")}
          >
            <div className="flex items-center justify-center space-x-2">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-10 text-center">
                Nos Objectifs
              </h2>
              <div className="md:hidden">
                {expandedSections.objectifs ? (
                  <ChevronUp className="h-6 w-6 text-gray-900" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-900" />
                )}
              </div>
            </div>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6 md:mb-12"></div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-green-100 max-w-4xl mx-auto mb-6 md:mb-12">
            <p className="text-sm sm:text-sm md:text-2xl text-gray-700 italic text-center leading-relaxed">
              « EcoAir » se projette dans une société dans laquelle les
              communautés vivent de façon harmonieuse par l'accompagnement et la
              formation sur la transformation durable de leurs écosystèmes.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-8 ${expandedSections.objectifs ? "block" : "hidden md:grid"}`}
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-lg mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                  Expertise Interdisciplinaire
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Valoriser la complémentarité des expertises interdisciplinaires
                pour co-construire des solutions durables, adaptées aux enjeux
                complexes de la gestion des ressources naturelles et du
                développement communautaire.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 md:p-3 rounded-lg mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                  Évaluation Environnementale
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Évaluer les perturbations anthropiques et climatiques sur les
                écosystèmes et leurs interactions.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-4 flex-shrink-0">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                  Sensibilisation Environnementale
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Promouvoir la sensibilisation environnementale à toute échelle.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 md:p-3 rounded-lg mr-4 flex-shrink-0">
                  <HeartHandshake className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                  Développement de l'Auto-emploi
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Promouvoir le développement de l'auto-emploi au sein des
                communautés par le biais d'animations et d'implantations
                structurelles de proximité.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        id="missions"
        className="py-2 px-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-10 text-center">
            Notre Mission
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-2"></div>

          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl border border-green-100 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Globe className="h-16 w-16 lg:h-8 lg:w-8 sm:h-20 sm:w-20 sm:mb-4 text-green-600 my-6" />
              <p className="text-sm sm:text-sm md:text-xl text-gray-800 leading-relaxed mb-2">
                La mission d'EcoAir est de contribuer à une meilleure gestion et
                à la protection des ressources naturelles en vue de leur
                disponibilité pour les générations futures.
              </p>
              <div className="w-32 h-1 bg-amber-600 my-6"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Axes Stratégiques */}
      <motion.section
        id="axes"
        className="py-2 px-4 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Axes Stratégiques
            </h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                id: "axe-1",
                icon: BookOpen,
                color: "green",
                title: "Recherche et Innovation",
                desc: "Développement de solutions scientifiques innovantes adaptées aux enjeux locaux et régionaux.",
              },
              {
                id: "axe-2",
                icon: Sprout,
                color: "amber",
                title: "Gestion Durable des Ressources Naturelles",
                desc: "Accompagnement dans la gestion durable des ressources naturelles pour les générations futures.",
              },
              {
                id: "axe-3",
                icon: Users,
                color: "blue",
                title: "Sensibilisation, Formation et Autonomisation",
                desc: "Renforcement des capacités et autonomisation des communautés locales.",
              },
            ].map((axe) => {
              const Icon = axe.icon;
              const isOpen = expandedItems[axe.id];
              const fgColor = {
                green: "text-green-700",
                amber: "text-amber-700",
                blue: "text-blue-700",
              }[axe.color];
              const bgColor = {
                green: "bg-green-100",
                amber: "bg-amber-100",
                blue: "bg-blue-100",
              }[axe.color];

              return (
                <div
                  key={axe.id}
                  className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all"
                >
                  {/* Header Mobile Cliquable */}
                  <div
                    className="flex items-center justify-between cursor-pointer md:cursor-default"
                    onClick={() => toggleItem(axe.id)}
                  >
                    <div className="flex items-center md:block text-center md:w-full">
                      <div
                        className={`${bgColor} w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center mr-3 md:mr-0 md:mx-auto md:mb-6`}
                      >
                        <Icon className={`h-5 w-5 md:h-8 md:w-8 ${fgColor}`} />
                      </div>
                      <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 md:mb-3 text-left md:text-center">
                        {axe.title}
                      </h3>
                    </div>
                    {/* Chevron mobile */}
                    <div className="md:hidden">
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Contenu Desktop (Toujours visible) */}
                  <p className="hidden md:block text-gray-700 leading-relaxed text-center">
                    {axe.desc}
                  </p>

                  {/* Contenu Mobile (Accordéon Animé) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden md:hidden"
                      >
                        <p className="text-gray-700 text-sm leading-relaxed mt-2 pt-2 border-t border-gray-100">
                          {axe.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="domaines"
        className="py-2 px-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
              Domaines d'Intervention
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "Eau, Assainissement et Santé Environnementale",
                icon: Droplets,
                color: "blue",
                items: [
                  "Accès à l'eau potable et de proximité via des systèmes écologiques intégrés",
                  "Formation à l'hygiène",
                  "Gouvernance locale de l'eau",
                ],
              },
              {
                title: "Sols, Biodiversité & Usages",
                icon: Sprout,
                color: "green",
                items: [
                  "Inventaires des types de sols et étude de leurs dynamiques anthropogènes",
                  "Pratiques d'usage et impacts sur la biodiversité",
                  "Impacts sur les systèmes hydriques",
                ],
              },
              {
                title: "Climat, Forêt & Résilience",
                icon: CloudRain,
                color: "emerald",
                items: [
                  "Sensibilisation",
                  "Co-construction de plans communautaires d'adaptation",
                  "Valorisation des ressources et services écosystémiques",
                ],
              },
              {
                title: "Environnements Miniers",
                icon: Mountain,
                color: "amber",
                items: [
                  "Transformation des zones minières impactées",
                  "Laboratoires de science et de durabilité",
                ],
              },
              {
                title: "Mobilisation Communautaire",
                icon: HeartHandshake,
                color: "purple",
                items: [
                  "Campagnes d'information, éducation et communication",
                  "Initiatives solidaires au profit des communautés",
                ],
              },
            ].map((domain, index) => {
              const Icon = domain.icon;
              const domainId = `domaine-${index}`;
              const isOpen = expandedItems[domainId];

              const bgColor = {
                blue: "bg-blue-100",
                green: "bg-green-100",
                emerald: "bg-emerald-100",
                amber: "bg-amber-100",
                purple: "bg-purple-100",
              }[domain.color];

              const iconColor = {
                blue: "text-blue-600",
                green: "text-green-600",
                emerald: "text-emerald-600",
                amber: "text-amber-600",
                purple: "text-purple-600",
              }[domain.color];

              return (
                <div
                  key={index}
                  className="bg-gray-50 p-4 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  {/* Header Mobile Cliquable */}
                  <div
                    className="flex items-center justify-between cursor-pointer md:cursor-default"
                    onClick={() => toggleItem(domainId)}
                  >
                    <div className="flex items-center md:block md:w-full">
                      <div
                        className={`${bgColor} w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center mr-3 md:mr-0 md:mx-auto md:mb-6 flex-shrink-0`}
                      >
                        <Icon
                          className={`h-5 w-5 md:h-8 md:w-8 ${iconColor}`}
                        />
                      </div>
                      <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 md:mb-4 text-left md:text-center">
                        {domain.title}
                      </h3>
                    </div>
                    {/* Chevron mobile */}
                    <div className="md:hidden flex-shrink-0 ml-2">
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop Content */}
                  <ul className="space-y-3 hidden md:block">
                    {domain.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`${iconColor} text-xl mt-1`}>•</div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Animated Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden md:hidden"
                      >
                        <ul className="space-y-2 mt-2 pt-2 border-t border-gray-200">
                          {domain.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <div className={`${iconColor} text-lg mt-0.5`}>
                                •
                              </div>
                              <span className="text-gray-700 text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Actions et Services */}
      <motion.section
        id="actions"
        className="py-2 px-4 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
            Actions et Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all hover:border-green-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gouvernance */}
      <motion.section
        id="gouvernance"
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
            Gouvernance
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Assemblée Générale */}
            <div
              onClick={() => isMobile && openModal("ag")}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer"
            >
              {/* Desktop */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    L'Assemblée Générale
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Instance suprême de décision et de contrôle, définissant les
                  orientations stratégiques de l'association.
                </p>
              </div>

              {/* Mobile */}
              <div className="block md:hidden text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  L’Assemblée Générale
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Appuyer pour voir les détails
                </p>
              </div>
            </div>

            {/* Bureau Exécutif */}
            <div
              onClick={() => isMobile && openModal("be")}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer"
            >
              {/* Desktop */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Le Bureau Exécutif
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Organe de gestion quotidienne, garant de la mise en œuvre des
                  décisions de l'Assemblée Générale.
                </p>
              </div>

              {/* Mobile */}
              <div className="block md:hidden text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Le Bureau Exécutif
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Appuyer pour voir les détails
                </p>
              </div>
            </div>
          </div>

          {/* Coordonnateurs de Programme */}
          <div
            onClick={() => isMobile && openModal("coord")}
            className="bg-gradient-to-br from-green-500 to-amber-700 text-white p-10 rounded-2xl shadow-lg cursor-pointer"
          >
            {/* Desktop */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-3xl font-bold">
                  Les Coordonnateurs de Programme
                </h3>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed text-sm">
                Adossés à ces deux organes, les Coordonateurs de programme
                occupent une place stratégique dans la gouvernance d’EcoAir. ils
                assurent la traduction des orientations stratégiques en
                résultats tangibles. Leur rôle combine expertise scientifique,
                leadership opérationnel, pédagogie et suivi rigoureux. Ils
                garantissent que chaque projet corresponde aux besoins des
                communautés et qu’il respecte les principes de durabilité. Ils
                incarnent la vision d’EcoAir sur le terrain et constituent le
                lien essentiel entre gouvernance et action. Plus précisément,
                les coordonnateurs de programme :
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {[
                  "Conçoivent et pilotent les projets stratégiques.",
                  "Travaillent avec le Président pour traduire la vision en actions concrètes.",
                  "Assurent la planification, mise en œuvre et suivi-évaluation des activités.",
                  "Mobilisent les partenaires et financements.",
                  "Coordonnent les équipes de terrain et assurent la participation communautaire.",
                  "Intègrent recherche, innovation et savoirs locaux.",
                  "Produisent des rapports d’impact et assurent la communication externe.",
                  "Renforcent les capacités des bénéficiaires et favorisent leur autonomisation.",
                  "Garantissent la cohérence des programmes avec la mission et les valeurs d’EcoAir.",
                  "Sont les chefs d’orchestre opérationnels de l’association.",
                ].map((role, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden text-center">
              <h3 className="text-xl font-bold">Coordonnateurs de Programme</h3>
              <p className="text-sm text-green-100 mt-2">
                Appuyer pour voir les responsabilités
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto w-full max-w-md relative"
            >
              <button onClick={closeModal} className="absolute top-4 right-4">
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {activeModal === "ag" && (
                <>
                  <h3 className="text-xl font-bold mb-4">
                    L'Assemblée Générale
                  </h3>
                  <p>
                    Instance suprême de décision et de contrôle, définissant les
                    orientations stratégiques de l'association.
                  </p>
                </>
              )}

              {activeModal === "be" && (
                <>
                  <h3 className="text-xl font-bold mb-4">Le Bureau Exécutif</h3>
                  <p>
                    Organe de gestion quotidienne, garant de la mise en œuvre
                    des décisions de l'Assemblée Générale.
                  </p>
                </>
              )}

              {activeModal === "coord" && (
                <>
                  <h3 className="text-xl font-bold mb-4">
                    Coordonnateurs de Programme
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Pilotage stratégique des projets",
                      "Coordination des équipes terrain",
                      "Mobilisation des partenaires",
                      "Suivi-évaluation",
                      "Production de rapports d'impact",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
