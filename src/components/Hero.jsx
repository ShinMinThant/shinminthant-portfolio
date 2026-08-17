import { Container, Row, Col } from "react-bootstrap";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";

import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <Container>
        <Row className="align-items-center hero-row">

          {/* =========================
              LEFT - TEXT
          ========================= */}

          <Col lg={7} className="hero-left">

            <motion.div
              className="hero-text"
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >

              <motion.p
                className="hero-greeting"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
              >
                Shin Min Thant
              </motion.h1>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
              >
                Computer Science Student
                <span> & </span>
                Full Stack Developer
              </motion.h2>

              <motion.p
                className="hero-description"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
              >
                I enjoy building modern web applications,
                solving real-world problems, and continuously
                learning new technologies. I am passionate
                about turning ideas into practical and
                user-friendly digital experiences.
              </motion.p>

              {/* =========================
                  BUTTONS
              ========================= */}

              <motion.div
                className="hero-buttons"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                }}
              >

                <a
                  href="#projects"
                  className="hero-btn hero-btn-primary"
                >
                  View My Work
                  <FiArrowRight />
                </a>

                <a
                  href="/Shin_Min_Thant_Resume.pdf"
                  download
                  className="hero-btn hero-btn-outline"
                >
                  Download Resume
                  <FiDownload />
                </a>

              </motion.div>

              {/* =========================
                  SOCIAL LINKS
              ========================= */}

              <motion.div
                className="hero-socials"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
              >

                <span>Find me on</span>

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

            </motion.div>

          </Col>

          {/* =========================
              RIGHT - PROFILE IMAGE
          ========================= */}

          <Col lg={5} className="hero-right">

            <motion.div
              className="hero-image-wrapper"
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
            >

              {/* Decorative shape */}

              <div className="hero-image-glow"></div>

              <div className="hero-image-card">

                <img
                  src={profileImage}
                  alt="Shin Min Thant"
                  className="hero-profile-image"
                />

              </div>

              {/* Small floating badge */}

              <motion.div
                className="hero-image-badge"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                }}
              >
                <span className="status-dot"></span>
                Open to opportunities
              </motion.div>

            </motion.div>

          </Col>

        </Row>
      </Container>

      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.3,
        }}
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiChevronDown />
        </motion.div>
      </motion.a>

    </section>
  );
}

export default Hero;