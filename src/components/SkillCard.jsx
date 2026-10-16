import { twMerge } from "tailwind-merge";

const SkillCard = ({ img, name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-10 w-10 sm:h-14 sm:w-14 md:h-18 md:w-18 lg:h-22 lg:w-22 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r bg-zinc-800 to-abyss hover:bg-ocean hover:to-ocean hover-animation p-1 md:p-3 flex items-center justify-center"
      )}
    >
      <img
        className="w-full h-full object-contain"
        alt={name || "Skill"}
        src={img}
      />
    </figure>
  );
};

export default SkillCard;
