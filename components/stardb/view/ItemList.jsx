import React, { useEffect, useState } from "react";
import styles from "@/styles/stardb/ItemList.module.css";

const ItemList = ({ persons }) => {
  const [listPersons, setPersons] = useState(persons);
  useEffect(() => {
    setPersons(persons);
  }, [persons]);

  const handleItem = (e) => {
    const id = e.url.match(/\/(\d+)\/$/i)[1];
    console.log(id);
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
