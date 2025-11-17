import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal border-t border-beige/20 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto mobile-safe-padding px-4 sm:px-6">
        {/* Mobile Optimized Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {/* Logo and description - Full width on mobile */}
          <motion.div
            className="col-span-1 sm:col-span-2 lg:col-span-2 pb-6 sm:pb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm sm:text-base">S</span>
              </div>
              <span className="text-gray-100 font-semibold text-base sm:text-lg">
                Shopify Dev Studio
              </span>
            </div>
            <p className="text-gray-400 font-light max-w-md text-xs sm:text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Resources - Mobile optimized spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="pb-4 sm:pb-0"
          >
            <h3 className="text-white font-bold mb-4 text-sm sm:text-base">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/documentation")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-xs sm:text-sm w-full text-left py-1.5 px-0"
                >
                  {t('footer.documentation')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/support")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-xs sm:text-sm w-full text-left py-1.5 px-0"
                >
                  {t('footer.support')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/faq")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-xs sm:text-sm w-full text-left py-1.5 px-0"
                >
                  {t('footer.faq')}
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact info - Mobile optimized with larger touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">{t('footer.getInTouch')}</h4>
            <ul className="space-y-2 mb-6 sm:mb-8">
              <li>
                <a
                  href="mailto:consult@shopifydevstudio.tech"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-xs sm:text-sm py-1.5 block"
                >
                  consult@shopifydevstudio.tech
                </a>
              </li>
              <li>
                <a
                  href="mailto:shopifydevstudioo@gmail.com"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-xs sm:text-sm py-1.5 block"
                >
                  shopifydevstudioo@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-xs sm:text-sm pt-2">{t('footer.remoteWorldwide')}</li>
              <li className="text-gray-400 text-xs sm:text-sm">{t('footer.responseTime')}</li>
              <li className="text-gray-400 text-xs sm:text-sm">{t('footer.available')}</li>
            </ul>

            {/* Urgent Project Box - Mobile optimized */}
            <div className="bg-gradient-to-r from-beige/20 to-clay/20 border border-beige/30 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-beige text-base sm:text-lg">🔥</span>
                <span className="text-beige text-xs sm:text-sm font-bold">
                  {t('footer.urgentProject')}
                </span>
              </div>
              <p className="text-gray-300 text-xs leading-4">
                {t('footer.emergencySpaces')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Mobile optimized */}
        <motion.div
          className="border-t border-mint/20 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs text-center sm:text-left w-full sm:w-auto">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
