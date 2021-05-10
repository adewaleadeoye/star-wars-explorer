import planetReducer, {
  setPlanets,
  setPlanet,
  setPageCount,
} from '../planetsSlice';

describe('planets reducer', () => {
  const initialState = {
    pages: 0,
    planets: [],
    planet: {},
    loading: false,
  };

  const planetsData = [
    {
      title: 'Tatooine',
      terrain: 'desert',
      population: '200000',
      generated_id: 1,
    },
    {
      title: 'Alderaan',
      terrain: 'grasslands, mountains',
      population: '2000000000',
      generated_id: 2,
    },
  ];

  it('should return initial state', () => {
    expect(planetReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should populate planets', () => {
    const planets = planetReducer(
      initialState,
      setPlanets({ planets: planetsData })
    );

    expect(planets).toEqual({
      pages: 0,
      planets: planetsData,
      planet: {},
      loading: false,
    });
  });
});
