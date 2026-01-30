import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Programmes from "./pages/Programmes";
import Equipe from "./pages/Equipe";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import PartenairesAffiliations from "./pages/PartenairesAffiliations";
import "./i18n"; // Importez votre configuration ici

function App() {
  const [currentPage, setCurrentPage] = useState("accueil");
  const [language, setLanguage] = useState("FR");

  const renderPage = () => {
    // Gestion des routes avec sous-pages
    if (currentPage.includes("/")) {
      const [mainRoute, subRoute] = currentPage.split("/");

      if (mainRoute === "apropos") {
        return <APropos scrollToSection={subRoute} />;
      }

      if (mainRoute === "references") {
        switch (subRoute) {
          case "equipe":
            return <Equipe />;
          case "projets":
            return <Projets />;
          default:
            return <Equipe />;
        }
      }
    }

    // Routes principales
    switch (currentPage) {
      case "accueil":
        return <Accueil onNavigate={setCurrentPage} />;
      case "apropos":
        return <APropos />;
      case "publications":
        return <Publications />;
      case "partenaires":
        return <PartenairesAffiliations />;
      case "programmes":
        return <Programmes />;
      case "equipe":
        return <Equipe />;
      case "projets":
        return <Projets />;
      case "contact":
        return <Contact />;
      default:
        return <Accueil onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        currentLanguage={language}
        onChangeLanguage={setLanguage}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
