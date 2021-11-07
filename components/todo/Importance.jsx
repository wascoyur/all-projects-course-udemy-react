const { Fragment, useState } = require("react");
const { Button, Badge } = require("react-bootstrap");
import styles from "@/styles/Importance.module.css";
import { Dropdown, DropdownProps } from "react-bootstrap";

const Importance = ({ important }) => {
  const [importance, setImportance] = useState(false);
  const handleChange = (evtKey, e) => {
    console.log(evtKey, e);
  };
  return (
    <Dropdown className="float-end" id="dropdown-outline" autoClose>
      <Dropdown.Toggle
        className="bg-light text-info"
        id="dropdown"
        onSelect={handleChange}
      >
        {important}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ margin: 0 }}>
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
        <Dropdown.Item eventKey="3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Importance;
