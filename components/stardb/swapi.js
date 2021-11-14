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
export async function indexRandomPlanet() {
  const randomPlanetIndex = Math.floor(Math.random() * (19 - 1) + 1);
  // console.log(randomPlanetIndex);
  return randomPlanetIndex;
}
export async function getRandomPlanet(id) {
  return await getPlanet(id);
}
export function getImgPath(id) {
  if (id > 19) {
    return "/event-default.png";
  }
  return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
}
const getInnerPlanetModel = (planetApi) => {
  const gravity = planetApi.gravity.split(" ")[0].concat(" от земной");
  const period = Number(planetApi.orbital_period);
  const population = () => {
    try {
      return Number(planetApi.population);
    } catch (error) {
      return "Неизвестно";
    }
    return;
  };
  return {
    name: planetApi.name,
    gravity: gravity,
    period: period,
    population: population(),
  };
};
