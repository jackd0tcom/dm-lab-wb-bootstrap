import { Card, Container, Row, Col } from "react-bootstrap";

function Value({ title, description, action }) {
  return (
    <Card className="card shadow-sm h-100">
      <Card.Body className="p-4 d-flex flex-column">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <a className="btn btn-success">{action}</a>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container fluid>
      <Row>
        {values.map(({ title, description, action }, index) => (
          <Col key={title}>
            <Value
              key={index}
              title={title}
              description={description}
              action={action}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
