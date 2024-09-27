import Dashboard from "../dashboard/Dashboard";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccountsMine() {
    // Mock functions for creating and deleting accounts (replace these with actual logic)
    const handleCreateAccount = () => {
        // Logic to create an account goes here
    };

    const handleDeleteAccount = () => {
        // Logic to delete an account goes here
    };

    return (
        <Container>
            <Row className="mb-3 justify-content-center">
                <Col xs="auto">
                    <Link to="/account/create">
                        <Button variant="success" className="me-2">
                            Create Account
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Dashboard showDeleteButton={true} />
        </Container>
    );
}
