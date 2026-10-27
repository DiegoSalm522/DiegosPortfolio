import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../components/LanguageToggle";

const sections = ["hero", "about", "skills", "experience", "projects", "contact"];

function Navigation({ closeMenu }) {
  const { t } = useTranslation();
  const handleNavClick = (sectionId, event) => {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (closeMenu) {
      closeMenu();
    }
    requestAnimationFrame(() => {
      if (sectionId === "hero") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (targetElement) {
        const navbarHeight = 70;
        const elementPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    });
  };
  return (
    <ul className="nav-ul">
      {sections.map((sectionId) => (
        <li key={sectionId} className="nav-li">
          <a
            href={`#${sectionId}`}
            className="nav-link"
            onClick={(e) => handleNavClick(sectionId, e)}
          >
            {t(`nav.${sectionId === "hero" ? "home" : sectionId}`)}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ${
        isOpen ? "max-sm:flex max-sm:flex-col max-sm:h-svh max-sm:bg-primary/90" : ""
      }`}
    >
      <div className="w-full mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            <img
              src="/assets/brand/logo-white-sm.webp"
              alt={t("nav.logoAlt")}
              className="size-7"
            />
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden sm:flex">
              <Navigation closeMenu={closeMenu} />
            </nav>
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="flex cursor-pointer text-zinc-400 hover:text-white focus:outline-none sm:hidden"
            >
              {isOpen ? (
                <img
                  src="/assets/icons/close.svg"
                  alt={t("nav.closeMenu")}
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src="/assets/icons/menu.svg"
                  alt={t("nav.openMenu")}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-1 items-center justify-center overflow-y-auto text-center sm:hidden animate-menu-in">
          <nav className="w-full pb-16">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
