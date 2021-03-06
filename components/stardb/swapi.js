const URL = "https://swapi.dev/api/";
const URL_IMG = "https://starwars-visualguide.com/assets/img/";
// https://starwars-visualguide.com/assets/img/planets/3.jpg
// const URL = "https://jsonplaceholder.typicode.com/todos/1";

export const getPerson = async (id) => {
  const res = await fetch(`${URL}people/${id}/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};

export const getAllPersons = async () => {
  const res = await fetch(`${URL}people/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};
export const getPlanet = async (id = "") => {
  const res = await fetch(`${URL}planets/${id}/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));

  const innerModel = (res) => {
    // console.log("getInnerPlanetModel==>", getInnerPlanetModel(res));
    getInnerPlanetModel(res);
  };
  return getInnerPlanetModel(res);
};

export const getAllPlanets = async () => {
  const res = await fetch(`${URL}planets/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};
export const getImage = async (id) => {
  const res = await fetch(`${URL}planets/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};
export function getImgPath(id, type = "planets") {
  const host = "https://starwars-visualguide.com/assets/img";
  if (id > 19 || id < 1) {
    return "/event-default.png";
  }
  return `${host}/${type}/${id}.jpg`;
}
export async function indexRandomPlanet(id) {
  if (id !== 0) return id;
  const randomPlanetIndex = Math.floor(Math.random() * (19 - 1) + 1);
  // console.log(randomPlanetIndex);
  return randomPlanetIndex;
}
export async function getRandomPlanet(id) {
  return await getPlanet(id);
}
export async function getShips(id = "") {
  const res = await fetch(`${URL}/starships/${id}`).then((res) => res.json());
  return res;
}
const getInnerPlanetModel = (planetApi) => {
  const gravity = planetApi.gravity.split(" ")[0].concat(" ???? ????????????");
  const period = Number(planetApi.orbital_period);

  const population = () => {
    const pop = parseFloat(Number(planetApi.population));
    return isNaN(pop) ? "????????????????????" : pop;
  };
  return {
    name: planetApi.name,
    gravity: gravity,
    period: period,
    population: population(),
  };
};
