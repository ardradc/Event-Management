import { Container, Row, Col, Table, Card } from 'react-bootstrap';

const data = [
  { id: 1, name: 'John Doe', amount: 28, date: '01 Jan 2025', service: 'Service 1', status: 'complete' },
  { id: 2, name: 'Jane Smith', amount: 34, date: '01 Jan 2025', service: 'Service 2', status: 'complete' },
  { id: 3, name: 'Samuel Johnson', amount: 22, date: '01 Jan 2025', service: 'Service 3', status: 'complete' },
  { id: 4, name: 'Anna Lee', amount: 29, date: '01 Jan 2025', service: 'Service 4', status: 'processing' },
  { id: 5, name: 'Anna Lee', amount: 29, date: '01 Jan 2025', service: 'Service 5', status: 'pending' },
];

const RecentOrders = () => {
  return (
    <Container fluid>
      <Row className="my-4">
        <Col>
          <Card>
            <Card.Header>
              <h4>Recent orders</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Order date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.service}</td>
                      <td>{item.amount}</td>
                      <td>{item.date}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecentOrders;
