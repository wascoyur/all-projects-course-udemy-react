import React, { Fragment, useEffect, useState } from "react";
import { Badge, Row } from "react-bootstrap";

const Counter = ({ tasks }) => {
  const [allTasks, setAllTasks] = useState(tasks.length);
  const [donesTask, setDonesTask] = useState(0);
  const [activeTask, setActiveTask] = useState(0);
  const [importantTask, setImportantTask] = useState(0);

  const calcDoneTask = (all) => {
    return all.filter((t) => t.status === "done").length;
  };
  const calcActiveTask = (all) =>
    all.filter((t) => t.status === "active").length;

  const calcImportantTask = (all) => all.filter((t) => t.important < 2).length;

  useEffect(() => {
    setAllTasks(tasks.length);
    setDonesTask(calcDoneTask(tasks));
    setActiveTask(calcActiveTask(tasks));
    setImportantTask(calcImportantTask(tasks));
  }, [allTasks, tasks]);
  return (
    <Row xs={2} lg={8}>
      <Badge bg="secondary" className="m-2">
        Задач всего {allTasks}
      </Badge>
      <Badge bg="success" className="m-2">
        Задач выполнено {donesTask}
      </Badge>
      <Badge bg="warning" className="m-2">
        Задач активных {activeTask}
      </Badge>
      <Badge bg="primary" className="m-2">
        Задач важных {importantTask}
      </Badge>
    </Row>
  );
};

export default Counter;
