import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logoImage from "../images/footerlogo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#022851",
        color: "#ffffff",
        padding: "20px 0", // Adjusted padding for top-bottom spacing
        marginTop: "20px", // Added margin for spacing above footer
        marginBottom: "20px", // Added margin for spacing below footer
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Logo and Copyright */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div>
              <img
                src={logoImage}
                alt="HABOT Logo"
                className="img-fluid logo"
                style={{ maxWidth: "120px", marginBottom: "10px" }} // Adjust logo size and spacing
              />
              <p style={{ margin: 0 }}>© R Singhania</p>
            </div>
          </Col>

          {/* Links */}
          <Col md={5} className="text-center mb-3 mb-md-0">
            <Row>
              <Col xs={4}>
                <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Company</h6>
                <ul className="list-unstyled" style={{ padding: 0, margin: 0, lineHeight: "1.8" }}>
                  <li>About</li>
                  <li>FAQ</li>
                </ul>
              </Col>
              <Col xs={4}>
                <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Terms</h6>
                <ul className="list-unstyled" style={{ padding: 0, margin: 0, lineHeight: "1.8" }}>
                  <li>Data Privacy</li>
                  <li>Terms</li>
                  <li>Accessibility</li>
                </ul>
              </Col>
              <Col xs={4}>
                <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>Related</h6>
                <ul className="list-unstyled" style={{ padding: 0, margin: 0, lineHeight: "1.8" }}>
                  <li>Find Buyer</li>
                  <li>Feedback</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Social Media Icons */}
          <Col md={3} className="text-center text-md-end">
            <div
              className="d-flex justify-content-center justify-content-md-end gap-3"
              style={{ fontSize: "20px" }} // Adjusted icon size
            >
              <FaLinkedin />
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
