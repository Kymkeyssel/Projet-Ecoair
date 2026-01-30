import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Check } from "lucide-react";

const LANGS = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

import { motion } from "framer-motion";

const LanguageSwitcher = ({ scrolled = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "fr");
  const dropdownRef = useRef(null);

  const currentLanguage =
    LANGS.find((lang) => lang.code === currentLang) || LANGS[0];

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Synchroniser avec i18n
  useEffect(() => {
    setCurrentLang(i18n.language || "fr");
  }, [i18n.language]);

  // Charger la langue sauvegardée
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ecoair_lang");
      if (stored && stored !== i18n.language) {
        i18n.changeLanguage(stored);
        setCurrentLang(stored);
      }
    } catch (e) {
      // ignore
    }
  }, [i18n]);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setCurrentLang(langCode);
    setIsOpen(false);
    try {
      localStorage.setItem("ecoair_lang", langCode);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Bouton principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-green-200 hover:bg-green-500 transition-all duration-300 group"
        aria-label="Changer la langue"
        animate={{
          color: scrolled ? "#10b981" : "white",
        }}
        whileHover={{ scale: 1.05, color: "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        <Globe
          className="w-4 h-4 transition-transform group-hover:scale-110"
        />
        <span className="text-sm font-medium hidden sm:block">
          {currentLanguage.flag}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Menu déroulant */}
      <div
        className={`absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 group ${
                currentLang === lang.code
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </div>

              {currentLang === lang.code && (
                <Check className="w-4 h-4 animate-in fade-in-0 zoom-in-50" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
