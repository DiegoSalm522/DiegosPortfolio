import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(() =>
      setHeight(element.offsetHeight)
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={ref} className="relative pb-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-start pt-10 md:pt-20 md:gap-10"
        >
          {/* Title */}
          <div className="relative z-10 flex flex-col self-start max-w-xs md:flex-row lg:max-w-sm md:w-full">
            <div className="absolute flex items-center justify-center w-10 h-10 rounded-full left-3 bg-primary">
              <div
                className={`w-4 h-4 p-2 border rounded-full ${
                  item.active
                    ? "bg-aqua border-white/60 shadow-[0_0_12px_4px_rgb(74_192_222/0.6)]"
                    : "bg-zinc-800 border-zinc-700"
                }`}
              />
            </div>
            <div className="hidden md:block md:pl-20">{item.title}</div>
          </div>

          {/* Content */}
          <div className="relative w-full pl-20 pr-4 md:pl-4">
            <div className="mb-6 md:hidden">{item.title}</div>
            {item.content}
          </div>
        </div>
      ))}

      {/* Track */}
      <div
        style={{ height: `${height}px` }}
        className="absolute top-0 left-8 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        {/* Scroll progress */}
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-aqua from-[0%] via-aqua via-[10%] to-transparent"
        />
      </div>
    </div>
  );
};

export default Timeline;
