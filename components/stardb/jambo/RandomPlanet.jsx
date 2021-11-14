import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stardb/RandomPlanet.module.css";
import { indexRandomPlanet, getImgPath, getRandomPlanet } from "../swapi";

const RandomPlanet = ({ getPlanet, getAllPlanets }) => {
  const [imgIndex, setImgIndex] = useState(2);
  const [population, setPopulation] = useState("");
  const [rotation, setRotation] = useState("");
  const [gravity, setGravity] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    indexRandomPlanet()
      .then((res) => {
        // console.log(res);
        setImgIndex(res);
        return getRandomPlanet(res);
      })
      .then((res) => {
        console.log("effect", res);
        setName(res.name);
        setPopulation(res.population);
        setRotation(res.period);
        setGravity(res.gravity);
      });
  }, []);
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.title}>
        <h2>Планета {name}</h2>
        <div>
          <Image
            src={getImgPath(imgIndex)}
            // layout="responsive"
            alt=""
            width="150"
            height="150"
            className="rounded"
          ></Image>
        </div>
      </div>
      <div className={styles.detail}>
        <h2>Детали объекта</h2>
        <div>
          <span>Население (чел)</span>: <span>{population}</span>
        </div>
        <div className="">
          <span>Период вращения, дн:</span> <span>{rotation}</span>
        </div>
        <div className="">Гравитация: {gravity}</div>
      </div>
    </div>
  );
};
export default RandomPlanet;
