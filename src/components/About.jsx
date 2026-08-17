import { Container, Row, Col } from "react-bootstrap";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <Container>
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>
                Building web applications with a passion for
                <span> technology.</span>
              </h3>

              <p>
                I'm Shin Min Thant, a final-year Computer Science student at the
                Myanmar Institute of Information Technology (MIIT) and an
                aspiring Full Stack Developer. I enjoy building practical,
                user-friendly web applications and turning ideas into reliable
                software solutions.
              </p>

              <p>
                I work with modern frontend technologies such as React.js and
                backend technologies including Python and Django. Through
                hands-on projects such as a Student Management System and a
                Mini-Mart POS System, I have developed experience in building
                full-stack web applications.
              </p>

              <p>
                Alongside web development, I'm developing my knowledge in
                databases and data engineering. My long-term goal is to grow as
                a developer who can build reliable applications and work
                effectively with data.
              </p>
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.div
              className="about-cards"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-card">
                <div className="about-card-icon">
                  <FiCode />
                </div>
                <div>
                  <h4>Web Development</h4>
                  <p>
                    Creating responsive and modern web applications using
                    React.js and Django.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <FiDatabase />
                </div>
                <div>
                  <h4>Database & Data</h4>
                  <p>
                    Working with databases and building a strong foundation in
                    data engineering.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <FiLayers />
                </div>
                <div>
                  <h4>Problem Solving</h4>
                  <p>
                    Turning real-world requirements into practical software
                    solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
