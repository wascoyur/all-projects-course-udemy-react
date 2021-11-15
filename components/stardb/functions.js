import {
  getIndexRandomPlanet,
  getImgPath,
  getRandomPlanet,
  getPlanet,
} from "./swapi";

export const getActiveItem = (id, list) => {
  if (id < 1 || list.length < 1) {
    return { "неверные входные параметры": { id, list } };
  }
  const activeItem = list.filter((p) => {
    return getIdByUrl(p.url) == id;
  });
  console.log("activeItem", activeItem);

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
export function transformGender(gender) {
  switch (gender) {
    case "male":
      return "мужской";
    case "female":
      return "женский";

    default:
      return "Не определен";
  }
}
