import { Container, Row, Col } from "react-bootstrap";
import { FiAward, FiExternalLink, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

import kbzpayCertificate from "../assets/kbzpay-certificate.jpg";
import deCertificate from "../assets/de-level-1-certificate.jpg";

const certificates = [
  {
    title: "KBZPay Student Ambassador Program",
    issuer: "KBZPay",
    description:
      "Certificate of participation and achievement in the KBZPay Student Ambassador Program.",
    image: kbzpayCertificate,
  },
  {
    title: "Data Engineering Level 1",
    issuer: "RIG Data Engineering Program",
    description:
      "Certificate awarded for completing Data Engineering Level 1 studies and developing foundational knowledge in data engineering.",
    image: deCertificate,
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="section-padding certificates-section"
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
          <p className="section-subtitle">ACHIEVEMENTS</p>

          <h2>Certificates</h2>

          <div className="section-line"></div>

          <p className="certificates-intro">
            Certifications and achievements that reflect my
            continuous learning and professional development.
          </p>
        </motion.div>

        {/* Certificates */}
        <Row className="g-4 justify-content-center">
          {certificates.map((certificate, index) => (
            <Col md={6} key={certificate.title}>
              <motion.div
                className="certificate-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                {/* Certificate Image */}
                <button
                  type="button"
                  className="certificate-image-wrapper"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                  aria-label={`View ${certificate.title}`}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />
                </button>

                {/* Certificate Info */}
                <div className="certificate-content">
                  <div className="certificate-icon">
                    <FiAward />
                  </div>

                  <div>
                    <p className="certificate-issuer">
                      {certificate.issuer}
                    </p>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.description}</p>

                    <button
                      type="button"
                      className="certificate-link"
                      onClick={() =>
                        setSelectedCertificate(certificate)
                      }
                    >
                      <FiExternalLink />
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              <FiX />
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;