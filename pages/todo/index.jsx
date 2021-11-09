import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Timer } from "../../components/Timer";
import { SearchPanel } from "../../components/todo/SearchPanel";
import { AppHeader } from "../../components/todo/AppHeader";
import TodoList from "../../components/todo/TodoList";
import Counter from "@/components/todo/Counter";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import AddTodo from "@/components/todo/AddTodo";

const Todo = ({ todos }) => {
  const changeStatus = (id, newStatus) => {
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        task.status = newStatus;
      }
      return task;
    });
    setTasks(newArray);
    // console.log("tasks==>", newArray);
  };
  let getData = async () => {
    const data = fetch();
  };
  // const data = todos.data;
  const data = [
    { id: 1, name: "Do it", important: 2, status: "active" },
    { id: 7, name: "Выучить next", important: 2, status: "active" },
    { id: 2, name: "Получить оффер", important: 1, status: "suspend" },
    {
      id: 3,
      name: "Изначально выполнена",
      important: 2,
      status: "done",
    },
    {
      id: 6,
      name: "Cредней важности пункт списка",
      important: 2,
      status: "done",
    },
    {
      id: 4,
      name: "Важный элемент списка",
      important: 1,
      status: "info",
    },
    {
      id: 5,
      name: "Элемент обычной важности",
      important: 3,
      status: "info",
    },
  ];
  const [tasks, setTasks] = useState(data);

  const onDeleted = (id, n) => {
    const task = tasks.filter((t) => t.id !== id);
    setTasks(task);
  };

  return (
    <div className="container">
      <Row>{AppHeader}</Row>
      <Row className="justify-content-md-center">
        <Row xs lg="2">
          <Col xs lg="3">
            <Timer />
          </Col>
          <Col>
            <Counter tasks={tasks} />
          </Col>
        </Row>
        <Row>{SearchPanel}</Row>

        <Row>
          <TodoList
            props={tasks}
            changeStatus={changeStatus}
            delTask={onDeleted}
          />
        </Row>
        <AddTodo />
      </Row>
    </div>
  );
};

export default Todo;

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const data = res.json();
//
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
