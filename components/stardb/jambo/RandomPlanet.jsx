import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stardb/RandomPlanet.module.css";

const RandomPlanet = ({ getPlanet, getAllPlanets }) => {
  const [imgIndex, setImgIndex] = useState(2);
  const [population, setPopulation] = useState("");
  const [rotation, setRotation] = useState("");
  const [gravity, setGravity] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    indexRandomPlanet()
      .then((res) => {
        console.log(res);
        return getRandomPlanet(res);
      })
      .then((res) => {
        setName(res.name);
        setPopulation(res.population);
        setRotation(res.orbital_period);
        if (res.gravity === "unknown") {
          setGravity("неизвестно");
        } else {
          setGravity(res.gravity);
        }
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
  async function indexRandomPlanet() {
    const countPlanets = (await getAllPlanets()).count;
    const randomPlanetIndex = Math.floor(Math.random() * (19 - 1) + 1);
    setImgIndex(randomPlanetIndex);
    // console.log(randomPlanetIndex);
    return randomPlanetIndex;
  }
  async function getRandomPlanet(id) {
    return await getPlanet(id);
  }
};
function getImgPath(id) {
  if (id > 19) {
    return "/event-default.png";
  }
  return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
}
export default RandomPlanet;
