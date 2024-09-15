import { Card, Col, Container, Row } from "react-bootstrap";
import Markdown from "react-markdown";
import Todo2 from "../components/Todos/Todo2.tsx";

function TodoListPage() {
  const requirements = `
**Difficulty: Medium**

#### Requirements:
1. Create a To-Do list application.
2. Allow users to add tasks.
3. Display the list of tasks.
4. Allow users to delete tasks.
5. Allow users to mark tasks as complete.`;
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Task 2: To-Do List with Delete and Completion Functionality
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
                <Todo2 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoListPage;
