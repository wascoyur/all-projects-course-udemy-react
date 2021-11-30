import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import {
  getPerson,
  getAllPersons,
  getPlanet,
  getAllPlanets,
  getShips,
} from "@/components/stardb/swapi";
import RandomPlanet from "@/components/stardb/jambo/RandomPlanet";
import styles from "@/styles/stardb/index.module.css";
import PrjNavbar from "@/components/stardb/NavbarProject/PrjNavbar";
import ItemList from "@/components/stardb/view/ItemList";
import ItemDetailed from "@/components/stardb/view/ItemDetailed";
import Loader from "@/components/Loader";
import { getActiveItem } from "@/components/stardb/functions";

const StarDB = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [persons, setPersons] = useState();
  const [activeIdItem, setActiveIdItem] = useState(0);
  const [activeItem, setActiveItem] = useState("");
  const [planets, setPlanets] = useState("");
  const [ships, setShips] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllPersons().then((data) => {
      setPersons(data);
      setIsLoading(false);
    });
    getAllPlanets().then((res) => setPlanets(res));
    getShips().then((res) => setShips(res));
  }, []);

  useEffect(() => {
    // if(persons.)
    // setActiveItem(getActiveItem(activeIdItem, persons.results));
  }, [activeIdItem, persons]);

  const setActiveById = (id) => {
    setActiveIdItem(id);
  };
  return (
    <Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script> */}

        <title>Звездные войны</title>
      </Head>
      <div className={("container ", styles.body)}>
        <PrjNavbar></PrjNavbar>
        {/* <div> */}
        <RandomPlanet planets={planets} />
        {/* </div> */}

        <div className="row m-0 p-0">
          <div className="col my-0 py-0">
            {isLoading ? (
              <Loader />
            ) : (
              <ItemList
                persons={persons.results}
                setActiveById={setActiveById}
              />
            )}
          </div>
          <div className="col rounded my-0 py-0">
            {isLoading ? (
              <Loader />
            ) : (
              <ItemDetailed activeIdItem={activeIdItem} persons={persons} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StarDB;
