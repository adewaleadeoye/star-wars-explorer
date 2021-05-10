import constants from '../utils/constants';
import { getId, getTotalPages, mapPerson } from '../utils/helpers';

const peopleUrl = `${constants.API_BASE_URL}/${constants.PEOPLE}`;

export const fetchPeople = async (page: number) => {
  const response = await fetch(`${peopleUrl}?page=${page}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch people from the swapi API");
  }
  const peopleData = await response.json();
  const mappedPeople = peopleData.results.map((person: any, index: number) =>
    mapPerson(person, getId(page, index))
  );
  return { people: mappedPeople, pages: getTotalPages(peopleData.count) };
};

export const fetchPerson = async (personId: number) => {
  const response = await fetch(`${peopleUrl}/${personId}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch people from the swapi API");
  }
  const personData = await response.json();
  return mapPerson(personData, personId);
};
