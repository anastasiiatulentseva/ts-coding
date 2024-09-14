import { useState } from "react";
import { Button, Form, FormGroup, ListGroup } from "react-bootstrap";

interface Task {
  id: number | null;
  content: string;
}

function Todo1() {
  const [currentTaskContent, setCurrentTaskContent] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTaskAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), content: currentTaskContent },
    ]);
    setCurrentTaskContent("");
  }

  return (
    <>
      <h4>Simple To-Do List</h4>
      <ListGroup className="mb-2">
        {tasks.length ? (
          tasks.map(({ id, content }) => (
            <ListGroup.Item key={id}>{content}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No tasks yet</ListGroup.Item>
        )}
      </ListGroup>
      <Form onSubmit={handleTaskAdd}>
        <FormGroup>
          <Form.Text>Type in task content below</Form.Text>
          <Form.Control
            type="text"
            id="task"
            value={currentTaskContent}
            className="mb-2"
            onChange={(e) => setCurrentTaskContent(e.target.value)}
          />
        </FormGroup>
        <Button disabled={!currentTaskContent.length} type="submit">
          Add Task
        </Button>
      </Form>
    </>
  );
}

export default Todo1;
