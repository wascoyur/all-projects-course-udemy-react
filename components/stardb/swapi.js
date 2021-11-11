const URL = "https://swapi.dev/api/";
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
export const getPlanet = async (id) => {
  const res = await fetch(`${URL}people/${id}/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};

export const getAllPlanets = async () => {
  const res = await fetch(`${URL}people/`)
    .then((response) => response.json())
    .catch((err) => console.log("err"));
  return res;
};
