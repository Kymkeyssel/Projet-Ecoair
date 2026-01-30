import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import BanerImage from "../asset/BG/pexels-photo-371900.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (contactMethod === "whatsapp") {
      const { name, contact, subject, message } = formData;

      const whatsappMessage = `
    *Nouveau message EcoAir*  
    ──────────────
    *Nom:* ${name}  
    *Contact:* ${contact}  
    *Sujet:* ${subject}  
      
    *Message:*  
    ${message}  
    ──────────────
    Envoyé depuis le site EcoAir
      `;

      window.open(
        `https://wa.me/237676978090?text=${encodeURIComponent(
          whatsappMessage,
        )}`,
        "_blank",
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", contact: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
      return;
    }

    // Simule l'envoi email (à remplacer par votre logique réelle)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", contact: "", subject: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Pour le champ contact (email ou whatsapp)
  const handleContactChange = (e) => {
    setFormData({
      ...formData,
      contact: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
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
            {t("Contactez-Nous")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-200">
            {t(
              " Vous avez un projet, une question ou souhaitez collaborer avec nous? N'hésitez pas à nous contacter.",
            )}
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-4 bg-white animate-slide-up animate-delay-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Restons en Contact
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                N'hésitez pas à nous contacter pour toute question, suggestion
                ou demande de partenariat. Notre équipe est là pour vous
                répondre dans les plus brefs délais.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Adresse */}
                <div className="bg-white border border-green-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800">Adresse</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Yaoundé, Région du Centre
                    <br />
                    Cameroun
                  </p>
                </div>

                {/* Téléphone */}
                <div className="bg-white border border-green-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800">Téléphone</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    +237 6 76 97 80 90
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white border border-green-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    contact@ecoair.cm <br /> info@ecoair.cm
                  </p>
                </div>

                {/* Horaires */}
                <div className="bg-white border border-green-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800">Horaires</h3>
                  </div>
                  <div className="text-gray-600 text-xs leading-relaxed space-y-1">
                    <p>Lundi - Vendredi: 8h00 - 17h00</p>
                    <p>Samedi: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 p-6 rounded-3xl shadow-sm border border-green-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Déclaration Légale
                </h3>
                <p className="text-green-50 text-sm leading-relaxed font-medium">
                  Association à but non lucratif créée sous la Déclaration
                  N°002100/RDA/J06/SAAJP/BAPP du 22 octobre 2025.
                </p>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-gray-100 animate-pop-in animate-delay-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un Message
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl">
                    <p className="font-semibold">Message envoyé avec succès!</p>
                    <p className="text-sm">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl">
                    <p className="font-semibold">Erreur lors de l'envoi</p>
                    <p className="text-sm">Veuillez réessayer plus tard.</p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 animate-fade-in animate-delay-400"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                    >
                      Nom Complet *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2 ml-1">
                      <label
                        htmlFor="contact"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        {contactMethod === "email" ? "Email" : "WhatsApp"} *
                      </label>
                      <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-200">
                        <button
                          type="button"
                          onClick={() => setContactMethod("email")}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                            contactMethod === "email"
                              ? "bg-white shadow text-green-600"
                              : "text-gray-500 hover:text-green-600"
                          }`}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod("whatsapp")}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                            contactMethod === "whatsapp"
                              ? "bg-white shadow text-green-600"
                              : "text-gray-500 hover:text-green-600"
                          }`}
                        >
                          WhatsApp
                        </button>
                      </div>
                    </div>
                    <input
                      type={contactMethod === "email" ? "email" : "tel"}
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder={
                        contactMethod === "email"
                          ? "votre.email@exemple.com"
                          : "Votre numéro WhatsApp"
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                    >
                      Sujet *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        placeholder="Sélectionnez un sujet"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none outline-none transition-all"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer le Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rejoignez Nous!
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nous sommes ouverts à diverses formes de collaboration pour
              amplifier notre impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partenariats
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborations institutionnelles, académiques et avec les
                organisations internationales pour des projets de recherche et
                développement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Projets Communautaires
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Initiatives locales d'accompagnement et de formation des
                communautés sur la gestion durable de leurs ressources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Consultance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Services d'expertise pour les études environnementales,
                l'évaluation d'impacts et le développement de stratégies
                durables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
