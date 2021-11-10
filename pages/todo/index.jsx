import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Timer } from "../../components/Timer";
import SearchPanel from "../../components/todo/SearchPanel";
import { AppHeader } from "../../components/todo/AppHeader";
import TodoList from "../../components/todo/TodoList";
import Counter from "@/components/todo/Counter";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import AddTodo from "@/components/todo/AddTodo";
import { onAddTask } from "@/components/todo/functions/onAddTask.jsx";
import { onChangeImportance } from "@/components/todo/functions/onChangeImportance.jsx";

const Todo = ({ todos }) => {
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
  const [toView, setToView] = useState("");
  const [filtered, setFiltered] = useState("");
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
  const addTask = onAddTask(tasks, setTasks);
  const changeImportanse = onChangeImportance(tasks, setTasks);
  let getData = async () => {
    const data = fetch();
  };
  // const data = todos.data;

  const onDeleted = (id, n) => {
    const task = tasks.filter((t) => t.id !== id);
    setTasks(task);
  };
  const selector = (choose) => {
    setToView(choose);
    // console.log(getChosedTasks(toView));
  };
  const getChosedTasks = (stat = "all") => {
    if (stat == "all") return tasks;

    if (toView === "important") {
      const highImportance = tasks.filter((t) => {
        return t.important < 2;
      });
      console.log("highImportance", highImportance);
      return highImportance;
    }
    const fitered = tasks.filter((t) => t.status == stat);
    // console.log("filtered", fitered);
    return fitered;
  };
  const getFiltredContent = (qwery = "") => {
    // const firstFilter = getChosedTasks(toView);
    const filtered = tasks.filter((t) => {
      const result = t.name.includes(qwery);
      return result;
    });
    console.log("fit", filtered);
    setFiltered(filtered);

    return filtered;
  };

  return (
    <div className="container">
      <Row className="m-2">{AppHeader}</Row>
      <Row className="m-2">
        <Row xs lg="2">
          <Col xs lg="3">
            <Timer />
          </Col>
          <Col>
            <Counter tasks={tasks} />
          </Col>
        </Row>
        <SearchPanel
          tasks={tasks}
          selector={selector}
          content={getFiltredContent}
        />

        <Row className="m-2">
          <TodoList
            props={getChosedTasks(toView)}
            changeStatus={changeStatus}
            delTask={onDeleted}
            changeImportanse={changeImportanse}
          />
        </Row>
        <AddTodo addTask={addTask} />
      </Row>
    </div>
  );
};

export default Todo;
