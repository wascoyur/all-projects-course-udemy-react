import { indexRandomPlanet, getImgPath, getRandomPlanet } from "../swapi";

export async function updatePlanet(idPlanet = 0) {
  return await indexRandomPlanet(idPlanet)
    .then((id) => {
      idPlanet = id;
      return getRandomPlanet(id);
    })
    .then((r) => {
      const imgPath = getImgPath(idPlanet);
      r = { ...r, imgPath };
      console.log(r);
      return r;
    });
}
