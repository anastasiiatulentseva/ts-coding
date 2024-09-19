import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Task } from "./Todo2/Task.tsx";
import TaskForm from "./Todo2/TaskForm.tsx";

interface iTask {
  id: number | null;
  content: string;
}

function Todo3() {
  const [tasks, setTasks] = useState<iTask[]>([]);

  function handleTaskAdd(taskContent: string) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), content: taskContent },
    ]);
  }

  function handleTaskDelete(id: number | null) {
    if (!id) return;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h4>To-Do List</h4>
      <ListGroup className="mb-2">
        {tasks.length ? (
          tasks.map(({ id, content }) => (
            <Task
              key={id}
              content={content}
              taskId={id}
              onDelete={handleTaskDelete}
            />
          ))
        ) : (
          <span>No tasks yet.</span>
        )}
      </ListGroup>
      <TaskForm onSubmit={handleTaskAdd} />
    </>
  );
}

export default Todo3;
