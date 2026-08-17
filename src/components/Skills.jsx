import { Container, Row, Col } from "react-bootstrap";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiBookOpen,
} from "react-icons/fi";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    icon: <FiCode />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase />,
    skills: [
      "MySQL",
      "Oracle",
      "MongoDB",
      "SQL",
      "NoSQL",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FiTool />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Vite",
    ],
  },
];

const currentlyLearning = [
  "PHP",
  "Laravel",
];

function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <Container>
        {/* Section Heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">MY EXPERTISE</p>

          <h2>Skills & Technologies</h2>

          <div className="section-line"></div>
        </motion.div>

        {/* Skill Cards */}
        <Row className="g-4">
          {skillGroups.map((group, index) => (
            <Col md={6} lg={3} key={group.title}>
              <motion.div
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Currently Learning */}
        <motion.div
          className="learning-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="learning-icon">
            <FiBookOpen />
          </div>

          <div className="learning-content">
            <h3>Currently Learning</h3>

            <p>
              Expanding my backend development skills with modern
              PHP frameworks and building a stronger foundation in
              full-stack development.
            </p>

            <div className="skill-list">
              {currentlyLearning.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;