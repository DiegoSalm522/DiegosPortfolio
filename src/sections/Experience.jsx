import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import { experiences } from "../constants/experience";

const Experience = () => {
  const { t } = useTranslation();
  const data = experiences.map((experience) => ({
    id: experience.id,
    active: experience.current,
    title: (
      <div className="font-bold">
        <p className="text-2xl md:text-3xl text-aqua">
          {t(`experience.items.${experience.key}.period`)}
        </p>
        <p className="mt-2 text-2xl md:text-3xl text-zinc-200">
          {t(`experience.items.${experience.key}.role`)}
        </p>
        <p className="mt-1 text-2xl md:text-3xl text-zinc-400">
          {experience.company}
        </p>
        {experience.logo && (
          <img
            src={experience.logo}
            alt={t("experience.logoAlt", { company: experience.company })}
            loading="lazy"
            className="object-contain w-40 h-40 mx-auto mt-6 md:w-60 md:h-60"
          />
        )}
      </div>
    ),
    content: (
      <ul className="pl-5 space-y-4 text-sm list-disc md:text-base text-zinc-300 text-pretty marker:text-aqua">
        {t(`experience.items.${experience.key}.bullets`, {
          returnObjects: true,
        }).map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    ),
  }));

  return (
    <section id="experience" className="c-space section-spacing">
      <h2 className="text-heading">{t("experience.title")}</h2>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
