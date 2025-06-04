import "../i18n/i18n";
import { useTranslation } from "react-i18next";

export default function Biography() {
  const { t } = useTranslation();
  return (
    <div
      id="bio"
      className={`max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center md:items-start gap-8
        transition-opacity duration-1000 ease-in-out`}
    >
      {/* Left column - Artist picture */}
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg">
        <img
          src="../absentminotaur/gallery/tsotsorou.jpg"
          alt="Artist Portrait"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right column - Biography text */}
      <div className="flex-1 text-white-700 text-lg leading-relaxed">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
          {t("artistName")}
        </h1>
        <p>{t("cvPartOne")}</p>
        <p className="mt-4">{t("cvPartTwo")}</p>
      </div>
    </div>
  );
}
