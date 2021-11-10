const { Fragment, useState, useEffect } = require("react");
const { Button, Badge } = require("react-bootstrap");
import styles from "@/styles/Importance.module.css";
import { Dropdown, DropdownProps } from "react-bootstrap";

const Importance = ({ important, changeImportanse, id }) => {
  const [importance, setImportance] = useState(important);

  useEffect(() => {
    setImportance(important);
  }, [important]);
  const handleChange = (evtKey) => {
    // e.peventDefault();
    console.log("Imp", evtKey, id);
    changeImportanse(id, evtKey);
  };
  return (
    <Dropdown
      className="float-end"
      id="dropdown-outline"
      autoClose
      onSelect={handleChange}
    >
      <Dropdown.Toggle className="bg-light text-info" id="dropdown">
        {importance}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ margin: 0 }}>
        <Dropdown.Item eventKey="1" className="text-info">
          1
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" className="text-info">
          2
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" className="text-info">
          3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Importance;
