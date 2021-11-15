import React, { useEffect, useState } from "react";
import styles from "@/styles/stardb/ItemList.module.css";
import { getIdByUrl } from "../functions";

const ItemList = ({ persons, setActiveById }) => {
  const [listPersons, setPersons] = useState(persons);
  useEffect(() => {
    setPersons(persons);
  }, [persons]);

  const handleItem = (e) => {
    const id = getIdByUrl(e.url);
    setActiveById(id);
    // console.log(id);
  };
  return (
    <div className="col rounded bg-secondary">
      <ul className="list-group ">
        {persons && persons.length > 0 ? (
          persons.map((p) => (
            <li
              className={(styles.li, "list-group-item bg-secondary text-white")}
              key={p.name}
              onClick={() => handleItem(p)}
            >
              {p.name}
            </li>
          ))
        ) : (
          <div>..Loading</div>
        )}
      </ul>
    </div>
  );
};

export default ItemList;
