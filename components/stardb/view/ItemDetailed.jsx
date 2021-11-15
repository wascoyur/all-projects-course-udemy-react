import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { getIdByUrl, transformGender } from "../functions";
import Loader from "@/components/Loader";

const ItemDetailed = ({ activeIdItem, persons }) => {
  const [currentItem, setCurrentItem] = useState();
  const getItemById = (id) => {
    const list = persons.results;
    const item = list.filter((i) => getIdByUrl(i.url) === id);
    console.log("item", item);
    return item[0];
  };
  useEffect(() => {
    setCurrentItem(getItemById(activeIdItem));
  }, [activeIdItem]);
  return (
    <Fragment>
      {currentItem ? (
        <div className="card bg-secondary">
          <Image src="/event-default.png" alt="?" width={100} height={100} />
          <div className="card-body bg-secondary">
            <h2>{currentItem.name}</h2>
            <div className="list-group-flush ">
              <div className="list-group-item bg-secondary">
                Пол: {transformGender(currentItem.gender)}
              </div>
              <div className="list-group-item bg-secondary">
                Цвет глаз: {currentItem.hair_color}
              </div>
              <div className="list-group-item bg-secondary">afdsvbtgr</div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default ItemDetailed;
