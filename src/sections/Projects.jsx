import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import {
  MdOutlineComputer,
  MdPhoto,
  MdClose,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { projects } from "../constants/projects";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGallery]);

  const openGallery = (gallery, index = 0) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedGallery.length - 1 : prev - 1
    );
  };

  const handleSwipe = (_, { offset, velocity }) => {
    if (offset.x < -50 || velocity.x < -500) nextImage();
    else if (offset.x > 50 || velocity.x > 500) prevImage();
  };

  return (
    <section id="projects" className="c-space section-spacing">
      {/* Projects */}
      <h2 className="text-heading">{t("projects.title")}</h2>
      <div className="gap-x-8 gap-y-12 mt-12 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          const title = t(`projects.items.${project.slug}.title`);
          return (
            <div
              key={project.id}
              className="flex flex-col md:items-center gap-4 rounded-2xl bg-zinc-950"
            >
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                {project.gallery && project.gallery.length > 0 && (
                  <button
                    onClick={() => openGallery(project.gallery)}
                    aria-label={t("projects.openGallery", { title })}
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
                  >
                    <MdPhoto size={28} />
                  </button>
                )}
              </div>
              <div className="flex-1 px-4 pb-4 flex flex-col gap-3 mb-auto">
                <p className="headtext">{title}</p>
                <p className="subtext">
                  {t(`projects.items.${project.slug}.description`)}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={tag.path}
                        alt={tag.name}
                        loading="lazy"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="hidden lg:flex text-sm text-zinc-400">
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lagoon px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                    >
                      <MdOutlineComputer size={18} />
                      {t("projects.demo")}
                    </a>
                  )}
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-100 text-black px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                    >
                      <FaGithub size={18} />
                      {t("projects.code")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Gallery */}
      {selectedGallery && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            aria-label={t("projects.closeGallery")}
            className="absolute top-4 right-4 p-1 text-white hover:text-aqua transition-colors cursor-pointer"
          >
            <MdClose size={32} />
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selectedGallery[currentImageIndex]}
              alt={t("projects.imageAlt", { number: currentImageIndex + 1 })}
              className="w-full h-auto max-h-[70svh] md:max-h-[80svh] object-contain rounded-lg"
              draggable={false}
              drag={selectedGallery.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleSwipe}
            />
            {selectedGallery.length > 1 && (
              <div className="mt-4 flex items-center justify-between gap-2 md:contents">
                <button
                  onClick={prevImage}
                  aria-label={t("projects.previousImage")}
                  className="md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <MdChevronLeft size={28} />
                </button>
                <div className="flex flex-wrap justify-center md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2">
                  {selectedGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={t("projects.goToImage", { number: index + 1 })}
                      className="flex items-center justify-center h-8 px-1 cursor-pointer group"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-aqua w-8"
                            : "w-2 bg-white/50 group-hover:bg-white/80"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  aria-label={t("projects.nextImage")}
                  className="md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <MdChevronRight size={28} />
                </button>
              </div>
            )}
            <div className="fixed top-5 left-4 md:absolute md:top-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {selectedGallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
