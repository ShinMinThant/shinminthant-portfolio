import { Container } from "react-bootstrap";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <Container>

        <div className="footer-content">

          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3>Shin Min Thant</h3>

            <p>
              Computer Science Student & Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >

            <a
              href="https://github.com/ShinMinThant"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shin-min-thant-b35122336"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </motion.div>

          {/* Back To Top */}
          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Shin Min Thant.
            All rights reserved.
          </p>

          <p>
            Built with <span>React</span>
          </p>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;