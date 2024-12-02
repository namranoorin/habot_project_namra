import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/video.css';
import videoImage from '../images/video.png';

const SignupSection = () => {
  const [activeTab, setActiveTab] = useState('buyer'); // State for toggling between Buyer and Supplier

  return (
    <div
      className="signup-section"
      style={{
        backgroundColor: '#022851',
        color: '#ffffff',
        padding: '40px',
        maxWidth: '90%',
        margin: '0 auto',
        borderRadius: '10px',
        overflow: 'hidden', // Ensure content does not overflow the container
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Section with Video */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <div className="video-container" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                className="image-video"
                src={videoImage}
                alt="Video Placeholder"
                style={{ marginTop: '40px', width: '100%', maxWidth: '500px', height: 'auto' }}
              />
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="play-button"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#ff0000',
                  borderRadius: '50%',
                  padding: '15px',
                  textAlign: 'center',
                  display: 'inline-block',
                  zIndex: 2,
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/play-button-circled--v1.png"
                  alt="Play"
                  style={{ width: '30px', height: '30px' }}
                />
              </a>
            </div>
          </Col>

          {/* Right Section with Buyer and Supplier */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <div className="toggle-section mb-3">
              <span
                style={{
                  color: activeTab === 'buyer' ? '#ff7f27' : '#ffffff',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  marginRight: '20px',
                  borderBottom: activeTab === 'buyer' ? '2px solid #ff7f27' : 'none',
                  paddingBottom: '5px',
                }}
                onClick={() => setActiveTab('buyer')}
              >
                Buyer
              </span>
              <span
                style={{
                  color: activeTab === 'seller' ? '#ff7f27' : '#ffffff',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  marginLeft: '20px',
                  borderBottom: activeTab === 'seller' ? '2px solid #ff7f27' : 'none',
                  paddingBottom: '5px',
                }}
                onClick={() => setActiveTab('seller')}
              >
                Supplier
              </span>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            <div style={{ padding: '10px' }}> {/* Added padding to ensure content stays inside */}
              {activeTab === 'buyer' && (
                <ul style={{ listStyleType: 'none', padding: 0, color: '#ffffff', fontSize: '16px' }}>
                  <li>✔ Post your requirements.</li>
                  <li>✔ Sit back for multiple suppliers to contact you.</li>
                  <li>✔ Choose among the suppliers based on ratings and reviews.</li>
                </ul>
              )}
              {activeTab === 'seller' && (
                <ul style={{ listStyleType: 'none', padding: 0, color: '#ffffff', fontSize: '16px' }}>
                  <li>✔ Register as a supplier.</li>
                  <li>✔ Get requirements directly from buyers.</li>
                  <li>✔ Expand your reach with verified leads.</li>
                </ul>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupSection;
