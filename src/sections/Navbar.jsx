import { useState } from "react";

function Navigation({ closeMenu }) {
  const handleNavClick = (sectionId, event) => {
    event.preventDefault();
    let targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      targetElement =
        document.querySelector(`[data-section="${sectionId}"]`) ||
        document.querySelector(`.${sectionId}-section`);
    }
    if (!targetElement && sectionId !== "hero") {
      const sections = document.querySelectorAll(
        "main > div, body > div > div"
      );
      const sectionMap = {
        hero: 1,
        about: 2,
        skills: 3,
        projects: 4,
        contact: 5,
      };
      const index = sectionMap[sectionId];
      if (index && sections[index]) {
        targetElement = sections[index];
      }
    }
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
    if (closeMenu) {
      closeMenu();
    }
  };
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          href="#hero"
          className="nav-link"
          onClick={(e) => handleNavClick("hero", e)}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#about"
          className="nav-link"
          onClick={(e) => handleNavClick("about", e)}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#skills"
          className="nav-link"
          onClick={(e) => handleNavClick("skills", e)}
        >
          Skills
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#projects"
          className="nav-link"
          onClick={(e) => handleNavClick("projects", e)}
        >
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#contact"
          className="nav-link"
          onClick={(e) => handleNavClick("contact", e)}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            DS
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            {isOpen ? (
              <img
                src="/assets/icons/close.svg"
                alt="Close menu"
                className="w-6 h-6"
              />
            ) : (
              <img
                src="/assets/icons/menu.svg"
                alt="Open menu"
                className="w-6 h-6"
              />
            )}
          </button>
          <nav className="hidden sm:flex">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="block overflow-hidden text-center sm:hidden"
          style={{
            maxHeight: "100vh",
            animation: "slideInFromLeft 0.3s ease-out",
          }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
