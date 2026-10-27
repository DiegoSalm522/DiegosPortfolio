import { useTranslation } from "react-i18next";
import { mySocials } from "../constants/social";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-zinc-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-zinc-700 to-transparent h-[1px] w-full" />
      <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img
              src={social.icon}
              className="w-5 h-5"
              alt={social.name}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
