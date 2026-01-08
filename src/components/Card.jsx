import { motion } from "motion/react";

const Card = ({ style, text, containerRef }) => {
  return (
    <motion.div
      className="absolute px-1 py-3 text-center rounded-full ring-gray-700 font-extralight bg-[#0D5E8B] w-[8rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
