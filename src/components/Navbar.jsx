import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { searchIndex } from "../data/searchIndex";
import logo from "../asset/logo/logo.png";

export default function Navbar({
  currentPage,
  onNavigate,
  currentLanguage,
  onChangeLanguage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState([]);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  // Fermer les dropdowns quand on clique en dehors
  useEffect(() => {
    const handleDocClick = (e) => {
      // Ne pas fermer si on clique sur la navbar ou le dropdown
      if (navRef.current && navRef.current.contains(e.target)) {
        return;
      }
      if (searchRef.current && searchRef.current.contains(e.target)) {
        return;
      }
      if (menuRef.current && menuRef.current.contains(e.target)) {
        return;
      }
      setActiveDropdown(null);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  // Effet de scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logique de recherche
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query),
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleSearchResultClick = (result) => {
    if (result.page) {
      onNavigate(result.page);
      // Attendre un peu que la navigation se fasse avant de scroller si nécessaire
      if (result.sectionId) {
        setTimeout(() => {
          const section = document.getElementById(result.sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // Délai pour laisser le temps à la page de charger
      }
    }
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const navItems = [
    {
      id: "accueil",
      label: t("nav.home", "Accueil"),
    },
    {
      id: "apropos",
      label: t("nav.about", "À Propos"),
      submenu: [
        {
          id: "organisation",
          label: t("nav.organization", "Notre Organisation"),
        },
        { id: "objectifs", label: t("nav.goals", "Objectifs") },
        { id: "missions", label: t("nav.missions", "Missions") },
        { id: "domaines", label: t("nav.domains", "Domaines d'intervention") },
        { id: "axes", label: t("nav.strategic_axes", "Axes Stratégiques") },
        { id: "gouvernance", label: t("nav.governance", "Gouvernance") },
        { id: "actions", label: t("nav.actions", "Actions & Services") },
      ],
    },
    {
      id: "references",
      label: t("nav.references", "Références"),
      submenu: [
        { id: "equipe", label: t("nav.team", "Équipes"), page: "equipe" },
        { id: "projets", label: t("nav.projects", "Projets"), page: "projets" },
      ],
    },
    {
      id: "partenaires",
      label: t("nav.partners", "Partenaires & Affiliations"),
    },
    { id: "publications", label: t("nav.publications", "Publications") },
    {
      id: "contact",
      label: t("nav.contact", "Nous Contacter"),
    },
  ];

  // Toggle sous-menu mobile
  const toggleMobileSubmenu = (menuId) => {
    setMobileExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId],
    );
  };

  // Gestion du clic sur un item mobile
  const handleMobileItemClick = (item) => {
    if (item.submenu) {
      toggleMobileSubmenu(item.id);
    } else {
      onNavigate(item.id);
      setIsMenuOpen(false);
    }
  };

  // Gestion du clic sur un item desktop
  const handleDesktopItemClick = (item) => {
    if (item.submenu) {
      setActiveDropdown(activeDropdown === item.id ? null : item.id);
    } else {
      onNavigate(item.id);
      setActiveDropdown(null);
    }
  };

  // Gestion du clic sur un sous-item desktop
  const handleDesktopSubItemClick = (itemId, subItem) => {
    console.log("Desktop subitem clicked:", subItem);
    if (subItem.page) {
      onNavigate(subItem.page);
    } else {
      const section = document.getElementById(subItem.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        onNavigate(itemId);
      }
    }
    setActiveDropdown(null);
  };

  // Gestion du clic sur un sous-item mobile
  const handleMobileSubItemClick = (itemId, subItem) => {
    console.log("Mobile subitem clicked:", subItem);
    if (subItem.page) {
      onNavigate(subItem.page);
    } else {
      const section = document.getElementById(subItem.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        onNavigate(itemId);
      }
    }
    setIsMenuOpen(false);
  };

  // Fonction pour déterminer si un item est actif
  const isItemActive = (itemId) => {
    if (itemId === "accueil") {
      return !currentPage || currentPage === "accueil";
    }
    return currentPage === itemId;
  };

  const navClasses = `
    hidden lg:flex rounded-full px-6 xl:px-10 py-4 items-center justify-center gap-6 xl:gap-8 transition-all duration-500
    ${
      scrolled
        ? "bg-black/30 backdrop-blur-2xl shadow-lg border-white/40"
        : "bg-white/5 backdrop-blur-2xl border border-white/30 shadow-2xl"
    }
  `;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full px-4 lg:px-12 max-w-[95%] z-50 flex items-center justify-between">
      {/* Logo / Text EcoAir */}
      <div
        className="flex items-center space-x-2 cursor-pointer group z-50"
        onClick={() => onNavigate("accueil")}
      >
        <motion.h1
          className="text-2xl lg:text-5xl font-extrabold"
          animate={{
            color: scrolled ? "#10b981" : "white",
            scale: 1,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          EcoAir
        </motion.h1>
      </div>

      {/* Navbar Desktop */}
      <nav ref={navRef} className={navClasses}>
        {navItems.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDesktopItemClick(item);
              }}
              className={`flex items-center text-sm font-medium transition-colors ${
                isItemActive(item.id)
                  ? item.id === "contact"
                    ? "bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-green-600"
                    : "text-green-300 border-b-2 border-green-400 pb-1 font-semibold"
                  : item.id === "contact"
                    ? "bg-green-500/80 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-green-600"
                    : "text-white hover:text-green-300"
              } ${item.id === "contact" ? "mx-2" : ""}`}
            >
              {item.label}
              {item.submenu && (
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === item.id ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {item.submenu && activeDropdown === item.id && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/10 z-10">
                <ul className="py-1">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDesktopSubItemClick(item.id, subItem);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-green-200 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Section droite */}
      <div className="flex items-center space-x-3 lg:space-x-4">
        {/* Recherche - Desktop */}
        <div className="hidden lg:flex relative items-center" ref={searchRef}>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsSearchOpen(!isSearchOpen);
            }}
            className="transition"
            animate={{
              color: scrolled ? "#10b981" : "white",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Search className="h-5 w-5" />
          </motion.button>

          <div
            className={`absolute right-0 top-full mt-2 transition-all duration-300 ${isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder={t("search_placeholder", "Rechercher...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="pl-4 pr-10 py-2 rounded-xl text-sm border bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-xl transition-all duration-300 w-64"
              />
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          <button
                            onClick={() => handleSearchResultClick(result)}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 text-gray-700 hover:text-green-700 transition"
                          >
                            <span className="font-semibold block">
                              {result.title}
                            </span>
                            <span className="text-xs text-gray-500 capitalize">
                              {result.page}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      {t("no_results", "Aucun résultat trouvé")}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Langue - Desktop */}
        <div className="hidden lg:block">
          <LanguageSwitcher scrolled={scrolled} />
        </div>

        {/* Bouton Hamburger - Mobile */}
        <button
          className="hamburger-button lg:hidden font-extrabold text-green-300 hover:text-green-600 transition z-50 p-2"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <motion.h1
            animate={{
              color: scrolled ? "#10b981" : "white",
              scale: 1,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.h1>
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-10 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-40 min-w-[250px] max-h-[70vh] overflow-y-auto"
          >
            <div className="p-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 relative">
                  <div className="relative flex items-center">
                    <Search className="h-3 w-3 text-gray-500 absolute left-2" />
                    <input
                      type="text"
                      placeholder={t("search_placeholder", "Rechercher...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-7 pr-2 py-1 rounded-full text-xs border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  {/* Résultats Mobile (simplifiés, pourraient être ajoutés ici si besoin) */}
                </div>
                <div className="flex-shrink-0">
                  <LanguageSwitcher scrolled={true} />
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() => handleMobileItemClick(item)}
                      className={`w-full flex items-center justify-between py-2 px-2 rounded-lg transition-colors text-sm ${
                        isItemActive(item.id)
                          ? item.id === "contact"
                            ? "bg-green-500 text-white font-semibold shadow-md"
                            : "bg-green-50 text-green-700 font-semibold"
                          : item.id === "contact"
                            ? "bg-green-400 text-white font-semibold hover:bg-green-500"
                            : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            mobileExpandedMenus.includes(item.id)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </button>
                    {item.submenu && mobileExpandedMenus.includes(item.id) && (
                      <div className="ml-3 mt-1 space-y-1 mb-2 border-l-2 border-gray-200 pl-2">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() =>
                              handleMobileSubItemClick(item.id, subItem)
                            }
                            className="block w-full text-left py-1.5 px-3 text-xs text-gray-600 hover:bg-green-50 hover:text-green-700 rounded transition-colors"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
