import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: '👤', // You can replace with an actual icon/image
      title: 'Select Your Role and Sign Up',
    },
    {
      id: 2,
      icon: '📝',
      title: 'Buyers Post Your Requirements',
    },
    {
      id: 3,
      icon: '🔍',
      title: 'Review, Select, and Contact the Best Suppliers',
    },
    {
      id: 4,
      icon: '✉️',
      title: 'Contact Buyers and Share Your Quote for the Service',
    },
    {
      id: 5,
      icon: '✔️',
      title: 'Suppliers Complete Your Profile and Get Notified for Opportunities',
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Both Parties Can Connect and Make Business, Leave Feedback',
    },
  ];

  return (
    <Container className="text-center py-5">
      {/* Section Title */}
      <h2 className="fw-bold mb-3">How it works?</h2>
      <p className="text-muted">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>

      {/* Steps Grid */}
      <Row className="mt-4">
        {steps.map((step) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={step.id}>
            <Card
              className="h-100 shadow-sm"
              style={{
                backgroundColor: step.id % 2 === 0 ? '#ffffff' : '#e7faff' , // Alternating background color
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                {/* Icon */}
                <div
                  className="icon mb-3"
                  style={{
                    fontSize: '2rem',
                    color: '#e74c3c', // Icon color
                  }}
                >
                  {step.icon}
                </div>
                {/* Title */}
                <Card.Title className="fw-bold">{step.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
