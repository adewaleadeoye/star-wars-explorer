import constants from '../utils/constants';
import { getId, getTotalPages, mapPlanet } from '../utils/helpers';

const planetsUrl = `${constants.API_BASE_URL}/${constants.PLANETS}`;

export const fetchPlanets = async (page: number) => {
  const response = await fetch(`${planetsUrl}?page=${page}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch movies from the swapi API");
  }
  const planetsData = await response.json();
  const mappedPlanet = planetsData.results.map((planet: any, index: number) =>
    mapPlanet(planet, getId(page, index))
  );
  return { planets: mappedPlanet, pages: getTotalPages(planetsData.count) };
};

export const fetchPlanet = async (planetId: number) => {
  const response = await fetch(`${planetsUrl}/${planetId}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch people from the swapi API");
  }
  const planetData = await response.json();
  return mapPlanet(planetData, planetId);
};
