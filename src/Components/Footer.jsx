import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - About*/}
        <div>
          <h3 className="text-xl font-bold mb-4">{t("aboutTitle")}</h3>
          <p
            className="text-gray-400 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("aboutContent") }}
          ></p>
        </div>
        {/* Center Column - Map */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">{t("locationTitle")}</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Εθνικό Αρχαιολογικό Μουσείο"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9587581858925!2d23.731479399013768!3d37.98934026718167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd33b0beeb1b%3A0xe950d9f534bb8213!2zzpXOuM69zrnOus-MIM6Rz4HPh86xzrnOv867zr_Os865zrrPjCDOnM6_z4XPg861zq_OvywgMjjOt8-CIM6fzrrPhM-JzrLPgc6vzr_PhSA0NCwgzpHOuM6uzr3OsSAxMDYgODI!5e0!3m2!1sel!2sgr!4v1748864729008!5m2!1sel!2sgr"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right Column - Menu */}
        <div className="md:text-right">
          <h3 className="text-xl font-bold mb-4">{t("menuTitle")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/#essay" className="text-gray-300 hover:text-white">
                {t("menuElement1")}
              </a>
            </li>
            <li>
              <a href="/gallery" className="text-gray-300 hover:text-white">
                {t("menuElement2")}
              </a>
            </li>
            <li>
              <a href="/#poem" className="text-gray-300 hover:text-white">
                {t("menuElement3")}
              </a>
            </li>
            <li>
              <a href="/#bio" className="text-gray-300 hover:text-white">
                {t("menuElement4")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left">
          <p>
            Copyright © {new Date().getFullYear()} {t("artistName")}
          </p>
        </div>
        <div className="text-right">
          <p>
            {t("designedBy")}
            <a
              style={{ color: "magenta" }}
              href="https://www.linkedin.com/in/dimosthenis-kanellopoulos/"
              target="_blank"
            >
              {t("designerName")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
