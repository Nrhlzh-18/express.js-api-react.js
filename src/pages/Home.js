// import component bootstrap react
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card clasName="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>Express.JS</h1>
                            <p class="lead">Belajar Fullstack Express.js dan React.js </p>
                            <Button href="" onClick="alert('ooogitu')">Klik aku</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;