import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import FooterBG from "../asset/BG/FooterBG.jpeg";
import logo from "../asset/logo/logo.png";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r bg-gray-600 text-white rounded-ls bg-black/40 relative animate-fade-in animate-delay-200"
      style={{
        backgroundImage: `url(${FooterBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 animate-slide-up animate-delay-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 animate-pop-in animate-delay-400">
          {/* EcoAir description */}
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 rounded-lg">
                <img src={logo} alt="Logo" className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-300">
                EcoAir
              </h3>
            </div>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              Association écologiste à but non lucratif œuvrant pour la gestion
              durable des ressources naturelles et le développement social au
              Cameroun.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-300">
              Liens Rapides
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {[
                "Domaines d'intervention",
                "Nos Projets",
                "Publications",
                "Partenaires",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-300">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Yaoundé, Région du Centre, Cameroun
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">contact@ecoair.cm</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">+237 6 76 97 80 90</p>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-300">
              Suivez-nous
            </h4>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                {
                  href: "https://facebook.com",
                  icon: "bxl-facebook",
                  color: "hover:text-blue-500",
                },
                {
                  href: "https://x.com",
                  icon: "bxl-twitter",
                  color: "hover:text-sky-400",
                },
                {
                  href: "https://linkedin.com",
                  icon: "bxl-linkedin",
                  color: "hover:text-blue-600",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                text-gray-300 ${social.color} 
                text-lg sm:text-xl transition-all duration-300
                w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
                rounded-full flex items-center justify-center
                bg-white/10 backdrop-blur-2xl border border-white/20
                shadow-md hover:scale-110 hover:bg-white/70
              `}
                >
                  <i className={`bx ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-green-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-300">
          <p>
            © 2025 EcoAir. Tous droits réservés. Déclaration
            N°002100/RDA/J06/SAAJP/BAPP du 22 octobre 2025.
          </p>
        </div>
      </div>
    </footer>
  );
}
