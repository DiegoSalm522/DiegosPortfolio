import Timeline from "../components/Timeline";
import { experiences } from "../constants/experience";

const Experience = () => {
  const data = experiences.map((experience) => ({
    id: experience.id,
    active: experience.current,
    title: (
      <div className="font-bold">
        <p className="text-2xl md:text-3xl text-aqua">
          {experience.period}
        </p>
        <p className="mt-2 text-2xl md:text-3xl text-zinc-200">
          {experience.role}
        </p>
        <p className="mt-1 text-2xl md:text-3xl text-zinc-400">
          {experience.company}
        </p>
        {experience.logo && (
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            loading="lazy"
            className="object-contain w-40 h-40 mx-auto mt-6 md:w-60 md:h-60"
          />
        )}
      </div>
    ),
    content: (
      <ul className="pl-5 space-y-4 text-sm list-disc md:text-base text-zinc-300 text-pretty marker:text-aqua">
        {experience.description.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    ),
  }));

  return (
    <section id="experience" className="c-space section-spacing">
      <h2 className="text-heading">Work Experience</h2>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
