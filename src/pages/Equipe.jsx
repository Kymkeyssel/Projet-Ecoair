import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Linkedin,
  Globe,
  ArrowRight,
  X,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";
import DrmomoImage from "../asset/ImagesEquipe/Dr MOMO/thumbnail_DSC_0433.jpg";
import DrElida from "../asset/ImagesEquipe/Dr Elida/Dr Elida.jpg";
import drmomo2 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_DSC_0372.jpg";
import drmomo3 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_IMG_20200129_101529.jpg";
import drelida2 from "../asset/ImagesEquipe/Dr Elida/IMG_20200130_172418.jpg";
import drelida3 from "../asset/ImagesEquipe/Dr Elida/thumbnail_S6.jpg";
import Drdjoumessi from "../asset/ImagesEquipe/Mme Djoumessi/IMG-20220326-WA0000.jpg";
import Drdjoumessi2 from "../asset/ImagesEquipe/Mme Djoumessi/IMG_20190525_161919_5.jpg";
import Drdjoumessi3 from "../asset/ImagesEquipe/Mme Djoumessi/IMG_20190329_114414_8.jpg";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: "Dr Mathieu Momo Nouazi",
      role: "Chef d'equipe",
      description:
        "Expert en pédologie et géomorphologie avec 15 ans d'expérience.",
      image: DrmomoImage,
      imageStyle: {
        scale: 1.05,
        objectPosition: "5% center",
      },

      gallery: [DrmomoImage, drmomo2, drmomo3],
      fullBio:
        "Mathieu exerce à l'Institut de Recherches Géologiques et Minières (Yaoundé, Cameroun), organisme du Ministère de la Recherche Scientifique et de l'Innovation (MINRESI). Il est également Membre de l'Association Camerounaise des Géomorphologues (ACG), et du Panel Scientifique sur le Bassin du Congo (SPCB).",
      mission:
        "Sa mission au sein d'EcoAir s'adosse au programme « Sols, Biodiversité et usages », et plus précisément l'étude de la diversité et la dynamique des couvertures pédologiques au Cameroun. Depuis la défense de sa Thèse de Doctorat en 2016, Mathieu a piloté plusieurs projets de recherche avec des collaborations nationale, et internationales (CEREGE, IRD). Ses approches combinent observations de terrains, cartographies thématiques fines, modèles pédo-génétiques et statistiques pour élucider les héritages géologiques et paléoclimatiques. Ces héritages conditionnent la structure profonde des sols, la morphologie, la phyto-géographie des paysages tropicaux et sont un guide pour les usages et la protection des sols. ",
      email: "mathieu@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 2,
      name: "Dr Elida Joelle Yemeli",
      role: "Coordonnatrice de Programme",
      description:
        "Spécialiste en développement durable axé sur la gestion des ressources en eau.",
      image: DrElida,
      imageStyle: {
        scale: 1.05,
        objectPosition: "50% 70%",
      },

      // gallery: [DrElida, drelida2, drelida3],
      gallery: [
        {
          src: DrElida,
          imageStyle: {
            scale: 1.15,
            translateY: 30,
            translateX: 6,
          },
        },
        {
          src: drelida2,
        },
        {
          src: drelida3,
        },
      ],

      fullBio:
        "Élida Joëlle est spécialiste en développement durable axé sur la gestion des ressources en eau. ",
      mission:
        "Elle met son expertise scientifique au service de la gestion intégrée des ressources hydriques, de l’évaluation environnementale et de la planification durable des territoires. Elle possède une expérience internationale en analyse et gestion environnementale acquise au ministère des Affaires municipales et de l’Habitation du Québec (MAMH), où elle a contribué à la Stratégie québécoise d’économie d’eau potable. Au Cameroun, elle a coordonné au sein de l’ONG CECOSDA des projets axés sur l’énergie verte et la résilience climatique. Sa mission au sein du programme EcoAir Eau, assainissement et santé environnementale est de promouvoir une gestion durable et équitable des ressources hydriques à travers l’analyse des impacts, la planification participative et le développement de solutions innovantes favorisant la santé et le bien-être des communautés.",
      email: "elida@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 3,
      name: "Mme Djoumessi Gladys",
      role: "Coordonnatrice de Programme",
      description: "Spécialiste en sciences spatiales et gestion des paysages.",
      image: Drdjoumessi,
      imageStyle: {
        scale: 1.05,
        objectPosition: "35% center",
      },

      gallery: [Drdjoumessi, Drdjoumessi2, Drdjoumessi3],
      fullBio:
        "Gladys est spécialiste en sciences spatiales. Elle applique les outils de cartographie, systèmes d'information géographique (SIG) et de télédétection aux domaines de la foresterie, de la gestion des paysages et des ressources naturelles.",
      mission:
        "Son travail s'inscrit dans une approche intégrée visant à concilier la préservation des écosystèmes avec les besoins croissants des populations. Elle a travaillé au sein d'organisation internationale, notamment le Centre de Recherche Forestière Internationale et le Centre International de recherche en Agroforesterie (CIFOR-ICRAF). Sa mission au sein d'EcoAir s'adosse au programme « climat, forêt et résilience ». Ses travaux portent sur l'analyse multi-temporelle du territoire et l'identification des zones prioritaires pour la conservation.",
      email: "gladys@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 4,
      name: "Dr Stéphane Momo Takoudjou",
      role: "Coordonnateur de Programme",
      description: "--metier--",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "--Bio--",
      mission: "--mission--",
      email: "stephane@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 5,
      name: "Dr Yemefack Martin",
      role: "Coordonnateur de Programme",
      description: "--metier--",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "--Bio--",
      mission: "--Mission--",
      email: "martin@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 6,
      name: "Dr Franca Marcelle Meguem Mboujda",
      role: "Coordonnatrice de Programme",
      description: "--metier--",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "--Bio--",
      mission: "--Mission--",
      email: "franca@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 7,
      name: "Dr Joseph Guepi Zetekouang Vounang",
      role: "Coordonnateur de Programme",
      description: "Chercheur...",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "--Bio--",
      mission:
        "Joseph est un chercheur dont l'expertise est directement liée à la gestion durable des terres et à la séquestration du carbone dans les sols. Il est spécialisé en Pédologie et Chimie Environnementale. Par ailleurs membre du Réseau Carbone-Sol-Afrique (Réseau CaSa) de l’Institut de Recherche et de Développement (IRD), ses recherches portent sur la stabilité et le stockage du carbone organique dans les sols, afin d’évaluer l'impact des dynamiques d’occupation du sol sur la dégradation des terres et à proposer des solutions pour une gestion durable et résiliente des ressources foncières. Au sein de EcoAir, ses travaux cadrent avec l’axe « Sols, Biodiversité et usages », et visent la protection des ressources naturelles et l’accompagnement des communautés face aux enjeux climatiques.",
      email: "joseph@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 8,
      name: "Vanelle Thalia Zébazé",
      role: "Facilitatrice",
      description: "--Metier--",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio:
        "Vanelle est spécialiste en droit des entreprises et des affaires. Formée à l’Université de Soa (Yaoundé), son travail porte sur l’analyse des contrats, la compréhension des enjeux juridiques et de l’accompagnement des organisations afin de garantir une gestion conforme et sécurisée. En stage au sein du cabinet d’avocats Maître KAMDEM SOP & PARTNERS, elle a travaillée en tant que collaboratrice, ce qui a enrichi son expertise à travers le conseil, la rédaction d’actes juridiques et le suivi de dossiers complexes.",
      mission:
        "Elle interviens à EcoAir en tant que conseillère juridique. À ce titre, elle réalise une veille juridique rigoureuse pour suivre l’évolution des normes environnementales, analyse les lois et la jurisprudence, et accompagne les organes dirigeants ainsi que les services internes dans leurs obligations de conformité. Elle participe à la gestion des contentieux et à la sécurisation juridique des activités de l’association. Son rôle comprend l’évaluation et la gestion des risques fonciers, sociaux et communautaires pouvant découler d’une mauvaise compréhension des communautés lors de l’implémentation de programmes écologiques. Cette approche permet de prévenir les conflits potentiels, d’assurer une bonne intégration des projets et de renforcer la responsabilité sociale et environnementale de l’organisation..",
      email: "loic@ecoair.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 9,
      name: "Keyssel Kitio Ymélé",
      role: "Responsable Digital & Développeur Web",
      description: "Developpeur Web FreeLance.",
      image:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
      gallery: [
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio:
        "Keyssel est Responsable Digital & Développeur Web au sein d’EcoAir. Il conçoit et maintient les plateformes web de la structure, développe des outils numériques internes et réalise les supports graphiques destinés aux réseaux sociaux. Il assure également le support logiciel et technique auprès des équipes. Passionné par les solutions digitales, il met ses compétences en programmation et en communication visuelle au service de la visibilité et de l’efficacité opérationnelle d’EcoAir.",
      mission:
        "Sa mission au sein d’EcoAir s’inscrit dans l’axe « Innovation Digitale & Communication ». Il développe et optimise les plateformes web, produit les contenus visuels et veille à la cohérence de la communication digitale. Il assure aussi le diagnostic et la résolution des problèmes logiciels ainsi que la mise à jour des outils numériques. Son objectif est de renforcer la présence en ligne d’EcoAir et de soutenir les équipes dans leurs besoins technologiques quotidiens..",
      email: "Kym-keyssel19@outlook.com",
      phone: "+237 6 56 17 14 42",
      location: "Yaoundé, Cameroun",
    },
  ];

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setCurrentImageIndex(0);
  };

  const handlePreviousImage = () => {
    if (selectedMember?.gallery) {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedMember.gallery.length - 1 : prev - 1,
        );
        setFade(false);
      }, 300);
    }
  };

  const handleNextImage = () => {
    if (selectedMember?.gallery) {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedMember.gallery.length - 1 ? 0 : prev + 1,
        );
        setFade(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (!selectedMember?.gallery) return;

    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedMember.gallery.length - 1 ? 0 : prev + 1,
        );

        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedMember]);

  const currentGalleryItem = selectedMember?.gallery?.[currentImageIndex];

  const currentImageSrc =
    typeof currentGalleryItem === "string"
      ? currentGalleryItem
      : currentGalleryItem?.src;

  const currentImageStyle =
    typeof currentGalleryItem === "string"
      ? null
      : currentGalleryItem?.imageStyle;

  return (
    <div className="min-h-[35vh] bg-gradient-to-b from-gray-50 to-gray-100 px-4">
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
              objectPosition: "30% 80%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-amber-700/30" />
        </div>
        <div className="relative z-10 mx-auto mt-16 text-center max-w-3xl px-4">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-200 mb-4">
            {t("Notre Equipe")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-green-200">
            {t(
              "Nous rassemblons des femmes et des hommes déterminés, unis par la volonté d’agir pour un avenir meilleur.",
            )}
          </p>
        </div>
      </motion.section>
      {/* <section className="relative min-h-[14vh] sm:min-h-[20vh] md:min-h-[35vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl mb-4 mx-4 mt-4">
        <div className="absolute inset-0">
          <img
            src={BanerImage}
            alt="Notre Équipe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/70 to-amber-700/70" />
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto mt-16">
          <h1 className="text-xl sm:text-2xl md:text-5xl text-white font-bold mb-2 sm:mb-4">
            {t("Notre Equipe")}
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-green-100 max-w-3xl mx-auto mt-2">
            {t(
              "Nous rassemblons des femmes et des hommes déterminés, unis par la volonté d'agir pour un avenir meilleur.",
            )}
          </p>
        </div>
      </section> */}
      <div className="max-w-[95%] 2xl:max-w-[1700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-6  mb-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <p className="text-sm sm:text-base text-green-600 font-medium mb-2">
              {t("Equipe EcoAir")}
            </p>
          </motion.div>

          <div className="flex gap-3 lg:gap-2 mb-12 overflow-x-auto snap-x snap-mandatory px-4 lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0 lg:px-0 scrollbar-hide">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ scale: 0.9, opacity: 0.7 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer
             flex-shrink-0 w-[75%] sm:w-[350px] snap-center
             lg:w-[calc(20%-24px)] lg:flex-shrink lg:min-w-[250px] max-w-[340px] xl:max-w-none"
                onClick={() => handleOpenModal(member)}
              >
                <div className="aspect-[6/10] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition:
                        member.imageStyle?.objectPosition ?? "50% center",
                      transform: `scale(${member.imageStyle?.scale ?? 1})`,
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent flex flex-col justify-end p-2">
                  {/* Flèche */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>

                  {/* Texte (caché sur mobile) */}
                  <div>
                    <h3 className="text-white text-[12px] font-bold md:text-xl mb-1">
                      {member.name}
                    </h3>

                    <p className="text-gray-200 text-[8px] md:text-sm font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 hidden md:block">
                      {member.description}
                    </p>

                    <div className="flex gap-4 hidden md:block">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors mr-2">
                        <Facebook className="w-4 h-4 text-white hover:text-sky-400" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors">
                        <Linkedin className="w-4 h-4 text-white hover:text-sky-400" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors ml-2">
                        <Globe className="w-4 h-4 text-white hover:text-sky-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: "none" }}
          >
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900">
              {selectedMember.gallery && selectedMember.gallery.length > 0 && (
                <>
                  <img
                    src={currentImageSrc}
                    alt={`${selectedMember.name} - Image ${
                      currentImageIndex + 1
                    }`}
                    className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                      fade ? "opacity-0" : "opacity-70"
                    }`}
                    style={{
                      transform: currentImageStyle
                        ? `
      translateX(${currentImageStyle.translateX ?? 0}px)
      translateY(${currentImageStyle.translateY ?? 0}px)
      scale(${currentImageStyle.scale ?? 1})
    `
                        : undefined,
                    }}
                  />

                  {selectedMember.gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviousImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-900" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-900" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedMember.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg z-10"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>
            {/* 
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {selectedMember.role}
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedMember.fullBio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">
                      {selectedMember.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-gray-900 font-medium">
                      {selectedMember.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">
                      {selectedMember.location}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Contenu du modal */}
            <div className="p-6 flex-1 overflow-y-auto  max-h-[60vh]">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-green-600 font-semibold">
                  {selectedMember.role}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Profil
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedMember.fullBio}
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Mission
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedMember.mission}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Email</p>
                      <p className="text-gray-900 text-[12px] font-medium">
                        {selectedMember.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Téléphone</p>
                      <p className="text-gray-900 text-sm font-medium">
                        {selectedMember.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Localisation</p>
                      <p className="text-gray-900 text-sm font-medium">
                        {selectedMember.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   Slack,
//   Facebook,
//   Linkedin,
//   Globe,
//   ArrowRight,
//   X,
//   Mail,
//   Phone,
//   MapPin,
//   Briefcase,
//   Award,
// } from "lucide-react";
// import DrmomoImage from "../asset/thumbnail_DSC_0433.jpg";
// import DrElida from "../asset/image ecoAir/Dr Elida.jpg";

// function Equipe() {
//   const { t } = useTranslation();
//   const [selectedMember, setSelectedMember] = useState(null);

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Dr Mathieu Momo Nouazi",
//       role: "Fondateur, Promoteur et Coordonnateur Général",
//       description:
//         "Expert en pédologie et géomorphologie avec 15 ans d'expérience.",
//       image: DrmomoImage,
//       fullBio:
//         "Mathieu exerce à l'Institut de Recherches Géologiques et Minières (Yaoundé, Cameroun), organisme du Ministère de la Recherche Scientifique et de l'Innovation (MINRESI). Il est également Membre de l'Association Camerounaise des Géomorphologues (ACG), et du Panel Scientifique sur le Bassin du Congo (SPCB).",
//       mission:
//         "Sa mission au sein d'EcoAir s'adosse au programme « Sols, Biodiversité et usages », et plus précisément l'étude de la diversité et la dynamique des couvertures pédologiques au Cameroun. Depuis la défense de sa Thèse de Doctorat en 2016, Mathieu a piloté plusieurs projets de recherche avec des collaborations nationale, et internationales (CEREGE, IRD). Ses approches combinent observations de terrains, cartographies thématiques fines, modèles pédo-génétiques et statistiques pour élucider les héritages géologiques et paléoclimatiques.",
//       email: "mathieu@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Pédologie",
//         "Géomorphologie",
//         "Cartographie thématique",
//         "Modèles statistiques",
//       ],
//       achievements: [
//         "Fondateur d'EcoAir",
//         "Pilote de plusieurs projets de recherche",
//         "Collaborations internationales CEREGE et IRD",
//         "Membre du Panel Scientifique sur le Bassin du Congo",
//       ],
//     },
//     {
//       id: 2,
//       name: "Dr Elida Joelle Yemeli",
//       role: "Coordonnatrice de Programme",
//       description:
//         "Spécialiste en développement durable axé sur la gestion des ressources en eau.",
//       image: DrElida,
//       fullBio:
//         "Élida Joëlle est spécialiste en développement durable axé sur la gestion des ressources en eau. Elle met son expertise scientifique au service de la gestion intégrée des ressources hydriques, de l'évaluation environnementale et de la planification durable des territoires.",
//       mission:
//         "Elle possède une expérience internationale en analyse et gestion environnementale acquise au ministère des Affaires municipales et de l'Habitation du Québec (MAMH), où elle a contribué à la Stratégie québécoise d'économie d'eau potable. Au Cameroun, elle a coordonné au sein de l'ONG CECOSDA des projets axés sur l'énergie verte et la résilience climatique. Sa mission au sein du programme EcoAir est de promouvoir une gestion durable et équitable des ressources hydriques.",
//       email: "elida@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Gestion des ressources en eau",
//         "Évaluation environnementale",
//         "Planification durable",
//         "Résilience climatique",
//       ],
//       achievements: [
//         "Expérience internationale au Québec",
//         "Coordination de projets énergie verte chez CECOSDA",
//         "Expertise en résilience climatique",
//         "Contribution à la Stratégie québécoise d'économie d'eau potable",
//       ],
//     },
//     {
//       id: 3,
//       name: "Mme Djoumessi Gladys",
//       role: "Coordonnatrice de Programme",
//       description: "Spécialiste en sciences spatiales et gestion des paysages.",
//       image: null,
//       fullBio:
//         "Gladys est spécialiste en sciences spatiales. Elle applique les outils de cartographie, systèmes d'information géographique (SIG) et de télédétection aux domaines de la foresterie, de la gestion des paysages et des ressources naturelles.",
//       mission:
//         "Son travail s'inscrit dans une approche intégrée visant à concilier la préservation des écosystèmes avec les besoins croissants des populations. Elle a travaillé au sein d'organisation internationale, notamment le Centre de Recherche Forestière Internationale et le Centre International de recherche en Agroforesterie (CIFOR-ICRAF). Sa mission au sein d'EcoAir s'adosse au programme « climat, forêt et résilience ». Ses travaux portent sur l'analyse multi-temporelle du territoire et l'identification des zones prioritaires pour la conservation.",
//       email: "gladys@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "SIG et télédétection",
//         "Foresterie",
//         "Gestion des paysages",
//         "Analyses socio-économiques",
//       ],
//       achievements: [
//         "Travail avec CIFOR-ICRAF",
//         "Expertise en analyse multi-temporelle",
//         "Identification zones de conservation prioritaires",
//         "Approche intégrée de gestion des paysages",
//       ],
//     },
//     {
//       id: 4,
//       name: "Dr Stéphane Momo Takoudjou",
//       role: "Coordonnateur de Programme",
//       description:
//         "Expert en recherche scientifique et développement de solutions innovantes.",
//       image: null,
//       fullBio:
//         "Expert en recherche scientifique et développement de solutions innovantes pour la gestion durable des ressources naturelles.",
//       mission:
//         "Stéphane coordonne les activités de recherche et d'innovation au sein d'EcoAir, en collaboration avec des partenaires nationaux et internationaux.",
//       email: "stephane@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Recherche scientifique",
//         "Innovation",
//         "Gestion de projets",
//         "Partenariats scientifiques",
//       ],
//       achievements: [
//         "Coordination recherche et innovation",
//         "Partenariats internationaux",
//         "Développement solutions durables",
//         "Gestion de projets complexes",
//       ],
//     },
//     {
//       id: 5,
//       name: "Dr Yemefack Martin",
//       role: "Coordonnateur de Programme",
//       description: "Spécialiste en gestion durable des ressources naturelles.",
//       image: null,
//       fullBio:
//         "Spécialiste reconnu dans la gestion durable des ressources naturelles avec une longue expérience dans le développement communautaire.",
//       mission:
//         "Martin apporte son expertise dans l'accompagnement des communautés pour une gestion responsable et durable de leurs ressources naturelles.",
//       email: "martin@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Gestion des ressources naturelles",
//         "Développement communautaire",
//         "Agroforesterie",
//         "Pédologie",
//       ],
//       achievements: [
//         "Expertise développement communautaire",
//         "Gestion responsable ressources",
//         "Accompagnement communautés locales",
//         "Promotion agroforesterie",
//       ],
//     },
//     {
//       id: 6,
//       name: "Dr Franca Marcelle Meguem Mboujda",
//       role: "Coordonnatrice de Programme",
//       description: "Experte en formation et renforcement des capacités.",
//       image: null,
//       fullBio:
//         "Experte en formation et renforcement des capacités avec une approche participative et inclusive.",
//       mission:
//         "Franca coordonne les programmes de formation et d'autonomisation des communautés, en mettant l'accent sur le transfert de compétences et l'empowerment local.",
//       email: "franca@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Formation",
//         "Renforcement de capacités",
//         "Autonomisation communautaire",
//         "Développement participatif",
//       ],
//       achievements: [
//         "Programmes de formation innovants",
//         "Autonomisation communautés locales",
//         "Transfert de compétences",
//         "Approche participative inclusive",
//       ],
//     },
//     {
//       id: 7,
//       name: "Dr Joseph Guepi Zetekouang Vounang",
//       role: "Coordonnateur de Programme",
//       description: "Spécialiste des environnements miniers et durabilité.",
//       image: null,
//       fullBio:
//         "Spécialiste des environnements miniers et de leur transformation vers des modèles de durabilité.",
//       mission:
//         "Joseph coordonne les projets liés aux environnements miniers, visant à transformer les zones impactées en laboratoires de science et de durabilité.",
//       email: "joseph@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Environnements miniers",
//         "Restauration écologique",
//         "Durabilité",
//         "Évaluation d'impacts",
//       ],
//       achievements: [
//         "Transformation zones minières",
//         "Création laboratoires de durabilité",
//         "Expertise restauration écologique",
//         "Évaluation impacts environnementaux",
//       ],
//     },
//     {
//       id: 8,
//       name: "Dongmeza Loïc Rodess",
//       role: "Environnementaliste",
//       description:
//         "Passionné par la sensibilisation et l'éducation environnementale.",
//       image: null,
//       fullBio:
//         "Environnementaliste passionné par la sensibilisation et l'éducation environnementale.",
//       mission:
//         "Loïc contribue aux campagnes de sensibilisation et à la mobilisation communautaire pour promouvoir les pratiques durables.",
//       email: "loic@ecoair.org",
//       phone: "+237 6XX XXX XXX",
//       location: "Yaoundé, Cameroun",
//       expertise: [
//         "Sensibilisation environnementale",
//         "Communication",
//         "Mobilisation communautaire",
//         "Éducation environnementale",
//       ],
//       achievements: [
//         "Campagnes de sensibilisation efficaces",
//         "Mobilisation communautaire réussie",
//         "Promotion pratiques durables",
//         "Éducation environnementale innovante",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100  px-4">
//       <section className="bg-gradient-to-r min-h-[30vh] from-green-700 to-amber-700 text-white py-20 px-4 animate-fade-in animate-delay-100 rounded-3xl shadow-2xl mx-4 mt-4">
//         <div className="max-w-7xl mx-auto mt-16">
//           <h1 className="text-5xl text-gray-200 font-bold mb-6">
//             {t("Notre Equipe")}
//           </h1>
//           <p className="text-3xl font-semibold text-green-50 max-w-3xl">
//             "Une équipe engagée et passionnée"
//           </p>
//           <p className="text-xl text-green-50 max-w-3xl">
//             {t(
//               "Nous rassemblons des femmes et des hommes déterminés, unis par la volonté d’agir pour un avenir meilleur."
//             )}
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto pt-10">
//         <div className="bg-slate-200 rounded-3xl shadow- p-8 md:p-12 mb-8">
//           <div className="text-center mb-16">
//             <p className="text-green-600 font-medium mb-3">
//               {t("Equipe EcoAir")}
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               {t("Une équipe unie pour un même objectif...")}
//               <br />
//               {t(
//                 "...Compétence, créativité et engagement au service de notre vision"
//               )}
//             </h1>
//           </div>

//           {/* ------------------ AFFICHAGE AVEC PHOTO OU INITIALES ------------------ */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2x transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//                 onClick={() => setSelectedMember(member)}
//               >
//                 <div className="aspect-[6/9] overflow-hidden">
//                   {member.image ? (
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover object-[5%_center]"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gradient-to-br from-green-700 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold pb-28 ">
//                       {member.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")
//                         .substring(0, 2)}
//                     </div>
//                   )}
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
//                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <ArrowRight className="w-5 h-5 text-white" />
//                   </div>

//                   <h3 className="text-white text-xl font-bold mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-200 text-sm font-medium mb-2">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-300 text-sm mb-4">
//                     {member.description}
//                   </p>

//                   <div className="flex gap-2">
//                     <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors">
//                       <Facebook className="w-4 h-4 text-white" />
//                     </button>
//                     <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors">
//                       <Linkedin className="w-4 h-4 text-white" />
//                     </button>
//                     <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors">
//                       <Globe className="w-4 h-4 text-white" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <div className="text-center">
//             <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
//               {t("equipe.seeAll")}
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div> */}
//         </div>

//         <div className="text-center bg-gradient-to-b from-green-700 to-amber-700 rounded-3xl h-32 pt-50 shadow-2xl px-6 mb-16">
//           <p className="text-white font-bold max-w-2xl mx-auto text-lg pt-6">
//             "
//             {t(
//               "Animée par la recherche, l’innovation et la préservation de l’environnement,"
//             )}
//             <br />
//             {t(
//               "notre équipe rassemble des spécialistes travaillant main dans la main pour protéger nos écosystèmes et accompagner les communautés."
//             )}
//             "
//           </p>
//         </div>
//       </div>

//       {selectedMember && (
//         <div
//           className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div
//             className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Photo en carte plus grande */}
//             <div className="relative h-96 overflow-hidden">
//               {selectedMember.image ? (
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   className="w-full h-full object-cover position-center-top rounded-t-3xl"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-green-500 to-amber-600 flex items-center justify-center text-white text-5xl font-bold rounded-t-3xl">
//                   {selectedMember.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")
//                     .substring(0, 2)}
//                 </div>
//               )}

//               <button
//                 onClick={() => setSelectedMember(null)}
//                 className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
//               >
//                 <X className="w-5 h-5 text-gray-900" />
//               </button>
//             </div>

//             {/* Contenu du modal */}
//             <div className="p-6 flex-1 overflow-y-auto">
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-1">
//                   {selectedMember.name}
//                 </h2>
//                 <p className="text-lg text-green-600 font-semibold">
//                   {selectedMember.role}
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-base font-semibold text-gray-900 mb-2">
//                     Profil
//                   </h3>
//                   <p className="text-gray-700 text-sm leading-relaxed">
//                     {selectedMember.fullBio}
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-base font-semibold text-gray-900 mb-2">
//                     Mission
//                   </h3>
//                   <p className="text-gray-700 text-sm leading-relaxed">
//                     {selectedMember.mission}
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 gap-3">
//                   <div className="flex items-start gap-3">
//                     <Mail className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                     <div>
//                       <p className="text-xs text-gray-600">Email</p>
//                       <p className="text-gray-900 text-sm font-medium">
//                         {selectedMember.email}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Phone className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                     <div>
//                       <p className="text-xs text-gray-600">Téléphone</p>
//                       <p className="text-gray-900 text-sm font-medium">
//                         {selectedMember.phone}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                     <div>
//                       <p className="text-xs text-gray-600">Localisation</p>
//                       <p className="text-gray-900 text-sm font-medium">
//                         {selectedMember.location}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Equipe;
