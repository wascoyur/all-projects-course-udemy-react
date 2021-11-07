const { Fragment, useState } = require("react");
const { Button, Badge } = require("react-bootstrap");
import styles from "@/styles/Importance.module.css";
import { Dropdown, DropdownProps } from "react-bootstrap";

const Importance = ({ important }) => {
  const [importance, setImportance] = useState(important);

  const handleChange = (evtKey) => {
    // e.peventDefault();
    console.log(evtKey);
  };
  return (
    <Dropdown
      className="float-end"
      id="dropdown-outline"
      /* autoClose */
      onSelect={(e) => setImportance(e)}
    >
      <Dropdown.Toggle className="bg-light text-info" id="dropdown">
        {importance}
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
