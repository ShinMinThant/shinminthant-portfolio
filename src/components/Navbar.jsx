import { useEffect, useState } from "react";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     DARK MODE
  ========================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  /* =========================
     NAVBAR SCROLL
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     NAV LINKS
  ========================= */

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      id: "home",
    },
    {
      name: "About",
      href: "#about",
      id: "about",
    },
    {
      name: "Skills",
      href: "#skills",
      id: "skills",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
    },
    {
      name: "Certificates",
      href: "#certificates",
      id: "certificates",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <Container>

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className="navbar-brand-custom"
          onClick={() => handleNavClick("home")}
        >
          <span className="brand-name">
            Shin<span>.</span>
          </span>
        </a>

        {/* =========================
            MOBILE CONTROLS
        ========================= */}

        <div className="mobile-controls">

          <button
            className="theme-toggle mobile-theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="desktop-navigation">

          <Nav className="custom-nav-links">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={
                  activeSection === link.id
                    ? "nav-link-custom active"
                    : "nav-link-custom"
                }
                onClick={() =>
                  handleNavClick(link.id)
                }
              >
                {link.name}
              </a>
            ))}

          </Nav>

          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        <div
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
        >

          <Nav className="mobile-nav-links">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={
                  activeSection === link.id
                    ? "mobile-nav-link active"
                    : "mobile-nav-link"
                }
                onClick={() =>
                  handleNavClick(link.id)
                }
              >
                {link.name}
              </a>
            ))}

          </Nav>

        </div>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;