import { Button, Form, FormGroup } from "react-bootstrap";
import { useState } from "react";

function TaskForm({ onSubmit }: { onSubmit: (taskContent: string) => void }) {
  const [currentTaskContent, setCurrentTaskContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Task submitted", currentTaskContent);
    onSubmit(currentTaskContent);
    setCurrentTaskContent("");
  };
  return (
    <Form onSubmit={handleSubmit}>
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
  );
}

export default TaskForm;
