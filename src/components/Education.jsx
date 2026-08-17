import { Container, Row, Col } from "react-bootstrap";
import {
  FiBookOpen,
  FiMapPin,
} from "react-icons/fi";
import { motion } from "framer-motion";

const education = [
  {
    institution:
      "Myanmar Institute of Information Technology (MIIT)",
    degree: "BE (Hons) Computer Science Engineering",
    status: "Final Year",
    description:
      "Studying Computer Science with a focus on software development, web technologies, databases, and practical application development.",
    icon: <FiBookOpen />,
  },
  {
    institution: "University of the People (UoPeople)",
    degree: "Bachelor of Science in Business Administration",
    status: "Ongoing",
    description:
      "Developing knowledge in business administration, management, communication, and business-related concepts alongside my Computer Science studies.",
    icon: <FiBookOpen />,
  },
  {
    institution:
      "Mandalay University of Foreign Languages",
    degree: "Diploma in English",
    status: "Completed",
    description:
      "Completed an English diploma program with a focus on English language skills and communication.",
    icon: <FiBookOpen />,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="section-padding education-section"
    >
      <Container>

        {/* Section Heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">MY BACKGROUND</p>

          <h2>Education</h2>

          <div className="section-line"></div>

          <p className="education-intro">
            My academic journey and educational background.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="education-timeline">

          {education.map((item, index) => (
            <motion.div
              className="education-item"
              key={item.institution}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >

              {/* Timeline Icon */}
              <div className="education-icon">
                {item.icon}
              </div>

              {/* Education Card */}
              <div className="education-card">

                <div className="education-status">
                  {item.status}
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <div className="education-meta">
                  <span>
                    <FiMapPin />
                    Myanmar
                  </span>
                </div>

                <p>{item.description}</p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Education;