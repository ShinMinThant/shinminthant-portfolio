import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      // Clear form after successful submission
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <Container>
        {/* =========================
            SECTION HEADING
        ========================= */}

        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2>Contact Me</h2>

          <div className="section-line"></div>

          <p className="contact-intro">
            Have a project, internship opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <Row className="g-5 align-items-start">
          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <Col lg={5}>
            <motion.div
              className="contact-info"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <h3>Let's Work Together</h3>

              <p>
                I'm always interested in learning, building new projects, and
                exploring opportunities in software development and technology.
              </p>

              {/* =========================
                  EMAIL
              ========================= */}

              <a
                href="mailto:shinminthant03mdy@gmail.com"
                className="contact-item"
              >
                <span className="contact-icon">
                  <FiMail />
                </span>

                <span>
                  <small>Email</small>
                  shinminthant03mdy@gmail.com
                </span>
              </a>

              {/* =========================
                  LOCATION
              ========================= */}

              <div className="contact-item">
                <span className="contact-icon">
                  <FiMapPin />
                </span>

                <span>
                  <small>Location</small>
                  Myanmar
                </span>
              </div>

              {/* =========================
                  GITHUB
              ========================= */}

              <a
                href="https://github.com/ShinMinThant"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">
                  <FiGithub />
                </span>

                <span>
                  <small>GitHub</small>
                  github.com/ShinMinThant
                </span>
              </a>

              {/* =========================
                  LINKEDIN
              ========================= */}

              <a
                href="https://www.linkedin.com/in/shin-min-thant-b35122336"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">
                  <FiLinkedin />
                </span>

                <span>
                  <small>LinkedIn</small>
                  LinkedIn Profile
                </span>
              </a>
            </motion.div>
          </Col>

          {/* =========================
              CONTACT FORM
          ========================= */}

          <Col lg={7}>
            <motion.form
              className="contact-form"
              onSubmit={sendEmail}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <Row className="g-3">
                {/* NAME */}

                <Col md={6}>
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Col>

                {/* EMAIL */}

                <Col md={6}>
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Col>

                {/* SUBJECT */}

                <Col xs={12}>
                  <label htmlFor="subject">Subject</label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </Col>

                {/* MESSAGE */}

                <Col xs={12}>
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </Col>

                {/* SEND BUTTON */}

                <Col xs={12}>
                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}

                    {!isSending && <FiSend />}
                  </button>

                  {/* SUCCESS MESSAGE */}

                  {status === "success" && (
                    <p className="contact-success">
                      ✅ Message sent successfully!
                    </p>
                  )}

                  {/* ERROR MESSAGE */}

                  {status === "error" && (
                    <p className="contact-error">
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}
                </Col>
              </Row>
            </motion.form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
