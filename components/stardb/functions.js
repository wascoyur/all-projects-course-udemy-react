import {
  getIndexRandomPlanet,
  getImgPath,
  getRandomPlanet,
  getPlanet,
} from "./swapi";

export const getActiveItem = (id, list) => {
  const activeItem = list.filter((p) => {
    return p.id === id;
  });
  return activeItem[0];
};
export const getIdByUrl = (url) => {
  return url.match(/\/(\d+)\/$/i)[1];
};
export async function updatePlanet(idPlanet = 0) {
  const planet = await getIndexRandomPlanet(idPlanet)
    .then((id) => {
      idPlanet = id;
      return getPlanet(id);
    })
    .then((r) => {
      const imgPath = getImgPath(idPlanet);
      r = { ...r, imgPath };
      return r;
    });
  console.log("planet", planet);
  return planet;
}
export function getRandomIndex(min, max) {
  //   console.log("min, max", `${max - min + min}`);
  const randomIndex = Math.floor(Math.random() * `${max - min}`);
  //   console.log("randomIndex", randomIndex);
  return randomIndex;
}
