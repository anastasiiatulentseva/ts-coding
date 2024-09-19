import { Card, Col, Container, Row } from "react-bootstrap";
import Markdown from "react-markdown";
import Todo3 from "../components/Todos/Todo3.tsx";

function AdvancedTodoListPage() {
  const requirements = `
**Difficulty: Hard**

#### Requirements:

1. Create a To-Do list application.
2. Allow users to add tasks.
3. Display the list of tasks.
4. Allow users to delete tasks.
5. Allow users to mark tasks as complete.
6. Allow users to edit tasks.
7. Persist the tasks in local storage, so they remain after a page refresh.`;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Task 3: Advanced To-Do List with Edit and Local Storage
                Persistence
              </Card.Title>
              <Card.Text as="div">
                <Markdown>{requirements}</Markdown>
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
                <Todo3 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdvancedTodoListPage;
