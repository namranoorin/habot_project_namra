import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LetSuppliersFindYou = () => {
  return (
    <div style={{ backgroundColor: '#e7faff', padding: '50px 0', marginTop:'70px'}}>
      <Container>
        <Row className="align-items-center">
          {/* Left Section: Text */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <h4 style={{ color: '#000', fontWeight: 'bold' }}>
              Let Suppliers{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: '#e74c3c', // Underline color
                }}
              >
                Find You
              </span>
            </h4>
          </Col>

          {/* Right Section: Button */}
          <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
            <Button
              style={{
                backgroundColor: '#e74c3c',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
              }}
            >
              Get Verified
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LetSuppliersFindYou;
