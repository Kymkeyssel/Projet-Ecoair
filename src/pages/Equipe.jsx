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
import DrElida from "../asset/ImagesEquipe/Dr Elida/IMG_20200131_101535.jpg";
import drmomo2 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_DSC_0372.jpg";
import drmomo3 from "../asset/ImagesEquipe/Dr MOMO/thumbnail_IMG_20200129_101529.jpg";
import drelida2 from "../asset/ImagesEquipe/Dr Elida/IMG_20200130_172418.jpg";
import drelida3 from "../asset/ImagesEquipe/Dr Elida/thumbnail_S6.jpg";
import Drdjoumessi from "../asset/ImagesEquipe/Mme Djoumessi/IMG-20220326-WA0000.jpg";
import Drdjoumessi2 from "../asset/ImagesEquipe/Mme Djoumessi/IMG_20190525_161919_5.jpg";
import Drdjoumessi3 from "../asset/ImagesEquipe/Mme Djoumessi/IMG_20190329_114414_8.jpg";
import DrStephane from "../asset/ImagesEquipe/Dr Stephane/img1.jpeg";
import imgVanelle from "../asset/ImagesEquipe/ZEBAZE Vanelle/imgVanelle1.jpeg";
import DrFranca from "../asset/ImagesEquipe/Dr Franca/imgDrFranca1.jpeg";
import DrJoseph from "../asset/ImagesEquipe/Dr Joseph/JO2.jpeg";
import DrJoseph2 from "../asset/ImagesEquipe/Dr Joseph/JO1.jpeg";
import DrJoseph3 from "../asset/ImagesEquipe/Dr Joseph/JO3.jpeg";
import DrYemefack from "../asset/ImagesEquipe/Dr Yemefack/imgDrY1.jpeg";
import Keyssel from "../asset/ImagesEquipe/YMELE Keyssel/kymimg1.jpeg";


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
        "Science du sol et dynamique des paysages tropicaux",
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
      email: "mnouazi@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 2,
      name: "Dr Elida Joelle Yemeli",
      role: "Coordonnatrice de Programme",
      description:
        "Développement durable axé sur la gestion des ressources en eau.",
      image: DrElida,
      imageStyle: {
        scale: 1.05,
        objectPosition: "50% 70%",
      },

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
      email: "eyemele@ecoiar-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 3,
      name: "Dr Gladys Djoumessi",
      role: "Coordonnatrice de Programme",
      description: "Sciences spatiales et gestion des paysages.",
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
      email: "gguimkeu@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 4,
      name: "Dr Stéphane Momo Takoudjou",
      role: "Coordonnateur de Programme",
      description: "Ecologie tropicale et photogrametrie",
      image:
        DrStephane,
      gallery: [
        DrStephane,
        // "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "Stéphane Momo Takoudjou est écologue forestier tropical spécialiste des dynamiques des écosystèmes. Il mobilise des approches quantitatives, la modélisation et des technologies avancées (LiDAR, SIG, analyses statistiques) pour l’étude de la biomasse, du carbone forestier et des interactions flore-environnement en Afrique centrale. Son expertise porte sur la quantification des stocks de carbone, la biométrie forestière et l’évaluation des services écosystémiques dans des paysages tropicaux complexes.Fort de plus d’une dizaine d’années d’expérience, Stéphane a travaillé avec des institutions de recherche internationales notamment CBI (Congo Basin Institute). Il a employé des approches intégrées visant à comprendre et mesurer les fonctions écologiques clés des forêts tropicales, en particulier leur rôle dans l’atténuation et l’adaptation au changement climatique, l’estimation de la biomasse aérienne, et la structure des peuplements forestiers, contribuant à l’amélioration des méthodes de suivi du carbone et de la résilience des écosystèmes forestiers.",
      mission: "Au sein d’EcoAir, son engagement est adossé au programme « Climat, forêt & résilience ». Ses travaux associent les approches physiques aux enjeux socio-écologiques, aux stratégies territoriales de résilience climatique, et de protection des forêts en faveur des communautés locales.",
      email: "takoudjoum@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 5,
      name: "Dr Yemefack Martin",
      role: "Conseiller",
      description: "Science du sol et systemes d'utilisation des terres",
      image: DrYemefack,
      gallery: [
        DrYemefack,
        // "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "Martin Yemefack applique des approches quantitatives robustes et des outils de télédétection, SIG et modélisation numérique à l’étude de la dynamique des sols, des usages des terres et de leurs interactions avec les systèmes agricoles tropicaux. Martin a une longue expérience (plus de 25 ans) en recherche pour le développement, notamment à l’Institut de Recherches Agricoles pour le Développement (IRAD), et travaille comme visiting scientist à l’International Institute of Tropical Agriculture (IITA). Il a également occupé des fonctions de coordination de la recherche nationale au Ministère de la Recherche Scientifique et de l’Innovation du Cameroun, et Président de l’African Soil Science Society (ASSS).",
      mission: "Sa mission au sein d’EcoAir s’adosse au programme « sols, biodiversité et usages ». Il vise à comprendre et quantifier les effets des pratiques agricoles et des changements d’usage des terres sur la qualité et l’évolution des sols en zones tropicales, afin d’orienter des stratégies de gestion durable des ressources naturelles et d’adaptation au changement climatique. Il contribue aussi à la dynamique du carbone organique et l’interaction entre pratiques agricoles et fertilité des terres. Au‑delà des sciences physiques, son travail intègre des dimensions socio‑écologiques, visant à reconnecter la compréhension des sols aux besoins des communautés rurales, contribuant ainsi à la préservation des écosystèmes et à l’amélioration des moyens de subsistance pour les générations futures.",
      email: "yemefackm@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 6,
      name: "Dr Franca Marcelle Meguem Mboujda",
      role: "Coordonnatrice de Programme",
      description: "Ecologie tropicale et anthropologie",
      image: DrFranca,
      gallery: [
        DrFranca,
        // "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio: "Franca Mboujda, spécialiste en agroforesterie et gestion des ressources naturelles, est chercheuse et praticienne du développement durable dans la coopération internationale. Formée à l’Université de Dschang (Cameroun) puis à l’IRD de Montpellier, elle a d’abord orienté ses recherches vers l’écologie, l’agroforesterie, la biologie et la gestion durable des ressources forestières. Son parcours s’est ensuite enrichi d’une dimension anthropologique à l’Université Paul-Valéry Montpellier III, où elle a approfondi sa compréhension des interactions entre l’Homme, la société et l’environnement. Avec près de dix années d’expérience, elle a développé une expertise en recherche appliquée, en évaluation de projets et en accompagnement des organisations de la société civile. Elle intervient également dans la conception et l’analyse de politiques publiques intégrant les dimensions de genre, de climat, de savoirs locaux. Avec plusieurs projets en Afrique et Europe, son parcours l’a amenée à collaborer avec des ONG, des universités et des institutions de recherche (IRD, CEFE, Université de Bordeaux).",
      mission: "Son rôle au sein d’EcoAir s’adosse aux axes « Climat, forêt & résilience » et « Mobilisation communautaire ». Elle articule les savoirs scientifiques, les méthodes de recherche-action et les pratiques locales, notamment dans des contextes de précarité ou de marginalisation. Elle travaille à la structuration de projets communautaires, l’organisation d’ateliers participatifs et au développement d’outils de capitalisation et de communication scientifique.  Elle met à profil ses compétences en analyse qualitative et quantitative, évaluation, plaidoyer et animation multi-acteurs, et apporte un regard sensible et contextualisé sur les enjeux globaux actuels.",
      email: "fmeguem@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 7,
      name: "Dr Joseph Guepi Zetekouang Vounang",
      role: "Coordonnateur de Programme",
      description: "Pedologie et chimie environnementale",
      image: DrJoseph,
      gallery: [DrJoseph, DrJoseph2, DrJoseph3],
      fullBio: "Joseph est un chercheur dont l'expertise est directement liée à la gestion durable des terres et à la séquestration du carbone dans les sols. Il est spécialisé en Pédologie et Chimie Environnementale. Par ailleurs membre du Réseau Carbone-Sol-Afrique (Réseau CaSa) de l’Institut de Recherche et de Développement (IRD), ses recherches portent sur la stabilité et le stockage du carbone organique dans les sols, afin d’évaluer l'impact des dynamiques d’occupation du sol sur la dégradation des terres et à proposer des solutions pour une gestion durable et résiliente des ressources foncières. ",
      mission:
        "Au sein de EcoAir, ses travaux cadrent avec l’axe « Sols, Biodiversité et usages », et visent la protection des ressources naturelles et l’accompagnement des communautés face aux enjeux climatiques.",
      email: "jguepi@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 8,
      name: "Vanelle Thalia Zébazé",
      role: "Facilitatrice",
      description: "Droit des entreprises et des affaires",
      image:
        imgVanelle,
      gallery: [
        imgVanelle,
        // "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio:
        "Vanelle est spécialiste en droit des entreprises et des affaires. Son travail porte sur l’analyse des contrats, la compréhension des enjeux juridiques et l’accompagnement des organisations afin de garantir une gestion conforme et sécurisée. En stage au sein du cabinet d’avocats Maître KAMDEM SOP & PARTNERS, elle a travaillé en tant que collaboratrice en conseil et rédaction d’actes juridiques.",
      mission:
        "Vanelle intervient à EcoAir en qualité de conseillère juridique. Elle réalise une veille rigoureuse de l’évolution des normes environnementales, lois et jurisprudence, et accompagne les organes dirigeants ainsi que les services internes dans leurs obligations de conformité. Son rôle comprend l’évaluation et la gestion des risques pour une acceptation sociale et communautaire des projets EcoAir. Cet apport permet de prévenir les conflits potentiels, d’assurer une bonne intégration des projets et de renforcer la responsabilité sociale et environnementale de l’organisation.",
      email: "tzebaze@ecoair-cm.org",
      phone: "+237 6XX XXX XXX",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 9,
      name: "Keyssel Kitio Ymélé",
      role: "Responsable Digital & Développeur Web",
      description: "Developpement et maintenance logicielle",
      image:
        Keyssel,
      imageStyle: {
        scale: 1.05,
        objectPosition: "5% center",
      },
      gallery: [
        Keyssel,
        // "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      fullBio:
        "Keyssel est Responsable Digital & Développeur Web au sein d’EcoAir. Il conçoit et maintient les plateformes web, développe des outils numériques internes et réalise les supports graphiques destinés aux réseaux sociaux. Il assure également le support logiciel et technique auprès des équipes. Passionné par les solutions digitales, il met ses compétences en programmation et en communication visuelle au service de la visibilité et de l’efficacité opérationnelle d’EcoAir. ",
      mission:
        "Keyssel veille à la qualité des contenus visuels et à la cohérence de la communication digitale. Son objectif est de renforcer la présence en ligne d’EcoAir et de soutenir les équipes dans leurs besoins technologiques quotidiens.",
      email: "Kymele@ecoair-cm.org",
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
        </div>
      </motion.section>
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
                className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex-shrink-0 w-[75%] sm:w-[350px] snap-center lg:w-[calc(20%-24px)] lg:flex-shrink lg:min-w-[250px] max-w-[340px] xl:max-w-none"
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
                      {/* <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors mr-2">
                        <Facebook className="w-4 h-4 text-white hover:text-sky-400" />
                      </button> */}
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

                  {/* <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Téléphone</p>
                      <p className="text-gray-900 text-sm font-medium">
                        {selectedMember.phone}
                      </p>
                    </div>
                  </div> */}

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