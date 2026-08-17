import { Container, Row, Col } from "react-bootstrap";
import {
  FiGithub,
  FiShoppingCart,
  FiUsers,
  FiSmartphone,
  FiCloud,
  FiFilm,
  FiDollarSign,
  FiHelpCircle,
  FiGrid,
} from "react-icons/fi";
import { motion } from "framer-motion";

const featuredProject = {
  title: "Mini-Mart POS System",
  description:
    "A web-based point-of-sale system for managing products, inventory, barcode sales, receipts, and daily sales operations.",
  technologies: [
    "Python",
    "Django",
    "React.js",
    "Bootstrap",
    "Database",
  ],
  github: "https://github.com/ShinMinThant/MINI_MART_POS",
  icon: <FiShoppingCart />,
};

const projects = [
  {
    title: "MIIT Social App",
    description:
      "A React-based student social application with authentication, student forms, attendance management, and role-based features.",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
    github: "https://github.com/ShinMinThant",
    icon: <FiSmartphone />,
  },

  {
    title: "Student Management System",
    description:
      "A Django-based student management application featuring student CRUD operations, search, pagination, authentication, and a dashboard.",
    technologies: ["Python", "Django", "HTML", "CSS"],
    github:
      "https://github.com/ShinMinThant/Student_Management_System",
    icon: <FiUsers />,
  },

  {
    title: "Weather App",
    description:
      "A responsive weather application that retrieves weather information from an external API and displays current conditions for searched locations.",
    technologies: ["React.js", "JavaScript", "API"],
    github: "https://github.com/ShinMinThant",
    icon: <FiCloud />,
  },

  {
    title: "Movie Search App",
    description:
      "A movie search application that allows users to search for movies and explore movie information using an external API.",
    technologies: ["React.js", "JavaScript", "API"],
    github: "https://github.com/ShinMinThant",
    icon: <FiFilm />,
  },

  {
    title: "Expense Tracker",
    description:
      "A simple web application for recording, managing, and tracking income and expenses with a clean user interface.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/ShinMinThant",
    icon: <FiDollarSign />,
  },

  {
    title: "Quiz App",
    description:
      "An interactive quiz application that presents questions, tracks user selections, and calculates the final score.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/ShinMinThant",
    icon: <FiHelpCircle />,
  },

  {
    title: "Memory Card Game",
    description:
      "An interactive memory card game built with React, featuring game logic, state management, and score tracking.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/ShinMinThant",
    icon: <FiGrid />,
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <Container>

        {/* Section Heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">MY WORK</p>

          <h2>Projects</h2>

          <div className="section-line"></div>

          <p className="projects-intro">
            A collection of projects I've built while developing
            my skills in frontend and backend development.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="featured-project"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Row className="align-items-center">

            <Col lg={5}>
              <div className="featured-project-icon">
                {featuredProject.icon}
              </div>
            </Col>

            <Col lg={7}>
              <div className="featured-project-content">

                <span className="project-label">
                  FEATURED PROJECT
                </span>

                <h3>{featuredProject.title}</h3>

                <p>{featuredProject.description}</p>

                <div className="project-tech">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>

              </div>
            </Col>

          </Row>
        </motion.div>

        {/* Other Projects */}
        <div className="other-projects-title">
          <h3>Other Projects</h3>
        </div>

        <Row className="g-4">

          {projects.map((project, index) => (
            <Col md={6} lg={4} key={project.title}>

              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="project-card-top">

                  <div className="project-card-icon">
                    {project.icon}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub />
                  </a>

                </div>

                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

              </motion.div>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Projects;