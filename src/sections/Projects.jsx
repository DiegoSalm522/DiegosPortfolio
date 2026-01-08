import { useState, useEffect } from "react";
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
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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

  return (
    <section id="projects" className="c-space section-spacing">
      {/* Projects */}
      <h2 className="text-heading">Projects</h2>
      <div className="gap-x-8 gap-y-12 mt-12 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:items-center gap-4 rounded-2xl bg-[#0B0B0D]"
          >
            <div className="relative w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-2xl"
              />
              {project.gallery && project.gallery.length > 0 && (
                <button
                  onClick={() => openGallery(project.gallery)}
                  className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
                >
                  <MdPhoto size={28} />
                </button>
              )}
            </div>
            <div className="flex-1 px-4 pb-4 flex flex-col gap-3 mb-auto">
              <p className="headtext font-bold">{project.title}</p>
              <p className="subtext">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex items-center gap-2 bg-black-200 px-3 py-1.5 rounded-lg"
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="hidden lg:flex text-sm text-white-600">
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
                    className="bg-cyan-600 px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                  >
                    <MdOutlineComputer size={18} />
                    Demo
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 text-black px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Gallery */}
      {selectedGallery && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <MdClose size={32} />
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedGallery[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            {selectedGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <MdChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <MdChevronRight size={28} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-cyan-400 w-8"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {selectedGallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
