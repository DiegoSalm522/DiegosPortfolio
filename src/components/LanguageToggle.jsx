import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { languages } from "../i18n";

const LanguageToggle = ({ className }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={twMerge(
        "flex items-center p-0.5 text-sm font-medium border rounded-full border-white/10 bg-zinc-900/60",
        className
      )}
    >
      {languages.map((lng) => {
        const active = i18n.resolvedLanguage === lng;
        return (
          <button
            key={lng}
            type="button"
            lang={lng}
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(lng)}
            className={`px-2.5 py-1 uppercase rounded-full cursor-pointer transition-colors ${
              active ? "bg-ocean text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            {lng}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
