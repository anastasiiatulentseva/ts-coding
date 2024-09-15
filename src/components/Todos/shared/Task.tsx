import { Button, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "../../../styles/styles.scss";

export function Task({
  taskId,
  content,
  onDelete,
}: {
  taskId: number | null;
  content: string;
  onDelete: (id: number | null) => void;
}) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        label={
          <span className={checked ? "strikethrough" : ""}>{content}</span>
        }
        checked={checked}
        onChange={toggleChecked}
      />
      <Button variant="danger" size="sm" onClick={() => onDelete(taskId)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
}
