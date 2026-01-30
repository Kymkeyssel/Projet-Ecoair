import {
  Droplets,
  Sprout,
  TreePine,
  Map,
  Users,
  Lightbulb,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Programmes() {
  const programs = [
    {
      icon: Droplets,
      title: "Eau, Assainissement et Santé Environnementale",
      description:
        "Programme dédié à l'accès à l'eau potable et à l'amélioration des conditions sanitaires des communautés.",
      details: [
        "Accès à l'eau potable et de proximité via des systèmes écologiques intégrés",
        "Formation à l'hygiène et aux bonnes pratiques sanitaires",
        "Gouvernance locale de l'eau et participation communautaire",
        "Systèmes d'assainissement durables et adaptés",
      ],
      color: "blue",
    },
    {
      icon: Sprout,
      title: "Sols, Biodiversité & Usages",
      description:
        "Étude et préservation de la diversité des sols et de leur impact sur les écosystèmes.",
      details: [
        "Inventaires des types de sols et étude de leurs dynamiques",
        "Analyse des pratiques d'usage anthropogènes",
        "Évaluation des impacts sur la biodiversité",
        "Études des interactions avec les systèmes hydriques",
      ],
      color: "amber",
    },
    {
      icon: TreePine,
      title: "Climat, Forêt & Résilience",
      description:
        "Renforcement de la résilience des communautés face aux changements climatiques.",
      details: [
        "Sensibilisation aux enjeux climatiques",
        "Co-construction de plans communautaires d'adaptation",
        "Valorisation des ressources et services écosystémiques",
        "Gestion durable des ressources forestières",
      ],
      color: "green",
    },
    {
      icon: Map,
      title: "Environnements Miniers",
      description:
        "Transformation des zones minières impactées en modèles de durabilité.",
      details: [
        "Évaluation des impacts environnementaux de l'exploitation minière",
        "Restauration écologique des sites dégradés",
        "Création de laboratoires de science et de durabilité",
        "Développement de pratiques minières responsables",
      ],
      color: "gray",
    },
    {
      icon: Users,
      title: "Mobilisation Communautaire",
      description: "Engagement et autonomisation des communautés locales.",
      details: [
        "Campagnes d'information, éducation et communication",
        "Initiatives solidaires au profit des communautés",
        "Renforcement des capacités locales",
        "Création de dynamiques participatives",
      ],
      color: "purple",
    },
  ];

  const { t } = useTranslation();

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-600",
        hover: "hover:bg-blue-100",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-600",
        hover: "hover:bg-amber-100",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-600",
        hover: "hover:bg-green-100",
      },
      gray: {
        bg: "bg-gray-50",
        text: "text-gray-600",
        border: "border-gray-600",
        hover: "hover:bg-gray-100",
      },
      purple: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-600",
        hover: "hover:bg-rose-100",
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen">
      <section
        className="bg-gradient-to-r from-green-700 to-amber-700 text-white rounded-3xl shadow-2xl mb-4 mx-4 mt-4
      min-h-[14vh] sm:min-h-[20vh] md:min-h-[35vh]
      py-6 sm:py-10 md:py-16 px-4 animate-fade-in animate-delay-100"
      >
        <div className="max-w-7xl mx-auto mt-10 sm:mt-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-gray-200 font-bold mb-2 sm:mb-4">
            {t(" Nos Programmes")}
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-green-200 max-w-3xl mt-2">
            {t(
              " Des programmes interdisciplinaires pour une gestion durable des ressources naturelles et le développement des communautés."
            )}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 bg-white animate-slide-up animate-delay-100">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {programs.map((program, index) => {
              const colors = getColorClasses(program.color);
              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all`}
                >
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-5 md:mb-6">
                      <div
                        className={`${colors.text} bg-white p-3 sm:p-3.5 md:p-4 rounded-xl shadow-md`}
                      >
                        <program.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                          {program.title}
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    <div className={`border-t-2 ${colors.border} pt-4 sm:pt-5 md:pt-6`}>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">
                        Axes d'intervention :
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                        {program.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                            <div className={`${colors.text} mt-1`}>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current"></div>
                            </div>
                            <span className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-white">
            <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-7 md:mb-8">
              <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Approche Intégrée</h2>
                <p className="text-green-50 text-sm sm:text-base md:text-lg leading-relaxed">
                  Nos programmes adoptent une approche holistique et
                  interdisciplinaire, combinant expertise scientifique, savoirs
                  locaux et innovation pour créer des solutions durables
                  adaptées aux contextes locaux.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-7 md:mt-8">
              <div className="bg-white bg-opacity-10 p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3">Participation</h3>
                <p className="text-green-50 text-xs sm:text-sm">
                  Engagement actif des communautés dans toutes les phases des
                  projets
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3">Innovation</h3>
                <p className="text-green-50 text-xs sm:text-sm">
                  Solutions endogènes basées sur la recherche scientifique
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3">Impact</h3>
                <p className="text-green-50 text-xs sm:text-sm">
                  Résultats mesurables et durables pour les générations futures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
