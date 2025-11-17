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
    <footer className="bg-charcoal border-t border-beige/20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto mobile-safe-padding">
        {/* Mobile Optimized Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Logo and description - Full width on mobile */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2 pb-4 sm:pb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-base">S</span>
              </div>
              <span className="text-gray-100 font-semibold text-lg">
                Shopify Dev Studio
              </span>
            </div>
            <p className="text-gray-400 font-light max-w-md text-sm leading-relaxed">
              Premium Shopify theme development agency creating exceptional
              e-commerce experiences that drive results and exceed expectations.
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
            <h3 className="text-white font-bold mb-6 text-base">Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("/documentation")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm w-full text-left py-2 px-0 hover:px-2"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/support")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm w-full text-left py-2 px-0 hover:px-2"
                >
                  Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/faq")}
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm w-full text-left py-2 px-0 hover:px-2"
                >
                  FAQ
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
            <h4 className="text-white font-bold mb-6 text-base">Get in Touch</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="mailto:hello@shopifydevstudio.com"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm py-2 block"
                >
                  hello@shopifydevstudio.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@shopifydevstudio.tech"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm py-2 block"
                >
                  contact@shopifydevstudio.tech
                </a>
              </li>
              <li>
                <a
                  href="mailto:consult@shopifydevstudio.tech"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm py-2 block"
                >
                  consult@shopifydevstudio.tech
                </a>
              </li>
              <li>
                <a
                  href="mailto:shopifydevstudioo@gmail.com"
                  className="text-gray-400 hover:text-beige transition-colors duration-200 text-sm py-2 block"
                >
                  shopifydevstudioo@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm pt-2">Remote, Worldwide</li>
              <li className="text-gray-400 text-sm">24h Response Time</li>
              <li className="text-gray-400 text-sm">Available 7 days/week</li>
            </ul>

            {/* Urgent Project Box - Mobile optimized */}
            <div className="bg-gradient-to-r from-beige/20 to-clay/20 border border-beige/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-beige text-lg">🔥</span>
                <span className="text-beige text-sm font-bold">
                  Urgent Project?
                </span>
              </div>
              <p className="text-gray-300 text-xs leading-5">
                2 emergency spaces available
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Mobile optimized */}
        <motion.div
          className="border-t border-mint/20 mt-8 sm:mt-12 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left w-full sm:w-auto">
            © {currentYear} Shopify Dev Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
