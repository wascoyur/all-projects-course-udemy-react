import { Button, Form } from "react-bootstrap";
import React, { useRef } from "react";

const AddTodo = ({ addTask }) => {
  const nameTask = useRef("");
  const importance = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(nameTask.current.value, importance.current.value);
    nameTask.current.value = "";
    importance.current.value = "";
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Имя задачи</Form.Label>
        <Form.Control type="text" ref={nameTask} />
        <Form.Label>Важность</Form.Label>
        <Form.Control className="w-25" type="number" ref={importance} />
        <Button type="submit" className="my-2">
          Создать задачу
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
