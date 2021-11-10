import React, { useEffect, useState } from "react";
import { Row, Button, ButtonGroup, Badge } from "react-bootstrap";

const SearchPanel = ({ tasks, selector, content }) => {
  const [allTasks, setAllTasks] = useState(tasks.length);
  const [donesTask, setDonesTask] = useState(0);
  const [activeTask, setActiveTask] = useState(0);
  const [importantTask, setImportantTask] = useState("");
  const [query, setQuery] = useState();

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

  const filteredContent = (e) => {
    // console.log(e.target.value);
    content(e.target.value);
  };

  return (
    <Row>
      <Row className="p-3">
        <input
          placeholder="введи чего-нибудь"
          className="form-control"
          aria-label="Basic outlined example"
          onChange={(e) => {
            filteredContent(e);
          }}
        />
      </Row>
      <Row>
        <ButtonGroup className="m-2 p-2">
          <Button variant="outline-secondary" onClick={() => selector()}>
            Все
            <Badge bg="secondary" className="top-0 position-absolute ml-1">
              {allTasks}
            </Badge>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => selector("active")}
          >
            Активные
            <Badge bg="primary" className="top-0 position-absolute ml-1">
              {activeTask}
            </Badge>
          </Button>
          <Button variant="outline-secondary" onClick={() => selector("done")}>
            Выполнены
            <Badge bg="dark" className="top-0 position-absolute ml-1">
              {donesTask}
            </Badge>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => selector("important")}
          >
            Важные
            <Badge bg="dark" className="top-0 position-absolute ml-1">
              {importantTask}
            </Badge>
          </Button>
        </ButtonGroup>
      </Row>
    </Row>
  );
};
export default SearchPanel;
