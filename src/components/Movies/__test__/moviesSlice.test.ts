import moviesReducer, { setMovies, setMovie } from '../moviesSlice';

describe('planets reducer', () => {
  const initialState = {
    pages: 0,
    movies: [],
    movie: {},
    loading: false,
  };

  const moviesData = [
    {
      title: 'A New Hope',
      director: 'George Lucas',
      producers: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      generated_id: 1,
    },
    {
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producers: 'Gary Kurtz, Rick McCallum',
      release_date: '1980-05-17',
      generated_id: 2,
    },
  ];

  it('should return initial state', () => {
    expect(moviesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should populate planets', () => {
    const movies = moviesReducer(
      initialState,
      setMovies({ movies: moviesData })
    );

    expect(movies).toEqual({
      pages: 0,
      movies: moviesData,
      movie: {},
      loading: false,
    });
  });
});
