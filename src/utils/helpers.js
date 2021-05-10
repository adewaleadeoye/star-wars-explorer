import constants from './constants';

export const getId = (currentPage, position) => {
  return (currentPage - 1) * 10 + position + 1;
};

export const getTotalPages = (count) => Math.ceil(count / 10);

export const mapPerson = (person, personId) => {
  return {
    name: person?.name,
    height: person?.height,
    mass: person?.mass,
    hair_color: person?.hair_color,
    skin_color: person?.skin_color,
    gender: person?.gender,
    birth_year: person?.birth_year,
    generated_id: personId,
  };
};

export const mapMovie = (movie, movieId) => {
  return {
    title: movie.title,
    director: movie.director,
    producers: movie.producer,
    release_date: movie.release_date,
    generated_id: movieId,
  };
};

export const mapPlanet = (planet, planetId) => {
  return {
    title: planet.name,
    terrain: planet.terrain,
    population: planet.population,
    generated_id: planetId,
  };
};

export const getListItemType = (itemType) => {
  // eslint-disable-next-line default-case
  switch (itemType) {
    case constants.PEOPLE:
      return constants.PEOPLE_IMG;
    case constants.MOVIES:
      return constants.MOVIES;
    case constants.PLANETS:
      return constants.PLANETS;
  }
};
