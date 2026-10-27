import { useTranslation } from "react-i18next";
import Marquee from "../components/Marquee";
import {
  programmingLanguages,
  frontend,
  backend,
  devopsTools,
  aiTools,
  others,
} from "../constants/skills";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="c-space section-spacing">
      <div className="items-start mt-18 md:mt-18">
        <h2 className="text-heading">{t("skills.title")}</h2>
        <br></br>
        {/*Programming Languages*/}
        <p className="subtext-heading">{t("skills.programmingLanguages")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {programmingLanguages.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*Frontend*/}
        <p className="subtext-heading">{t("skills.frontend")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {frontend.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*Backend & Databases*/}
        <p className="subtext-heading">{t("skills.backend")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {backend.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*DevOps & Tools*/}
        <p className="subtext-heading">{t("skills.devopsTools")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {devopsTools.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*AI Tools*/}
        <p className="subtext-heading">{t("skills.aiTools")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {aiTools.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*Others*/}
        <p className="subtext-heading">{t("skills.others")}</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {others.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/8 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/8 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
