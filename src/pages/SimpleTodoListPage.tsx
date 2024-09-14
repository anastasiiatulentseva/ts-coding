import { Card, Col, Container, Row } from "react-bootstrap";
import Markdown from "react-markdown";
import Todo1 from "../components/Todos/Todo1.tsx";

function SimpleTodoListPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Task 1: Simple To-Do List</Card.Title>
              <Card.Text>
                <Markdown>
                  {`
**Difficulty: Easy**

#### Requirements:

1. Create a simple To-Do list application.
2. Allow users to add tasks.
3. Display the list of tasks.
                    `}
                </Markdown>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>Implementation</Card.Header>
            <Card.Body>
              <div className="w-50">
                <Todo1 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SimpleTodoListPage;
