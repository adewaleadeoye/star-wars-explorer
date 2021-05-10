import peopleReducer, {
    setPeople,
    setPerson
  } from '../peopleSlice';
  
  describe('people reducer', () => {
    const initialState = {
        pages: 0,
        people: [],
        person: {},
        loading: false
    };
  
    const peopleData = [
        {
            name: 'Luke Skywalker',
            height: 172,
            mass: 77,
            hair_color: 'blond',
            skin_color: 'fair',
            gender: 'male',
            birth_year: '19BBY',
            generated_id: 1
          },
          {
            name: 'C-3PO',
            height: 167,
            mass: 75,
            hair_color: 'n/a',
            skin_color: 'gold',
            gender: 'n/a',
            birth_year: '112BBY',
            generated_id: 2
          },
    ];
  
    it('should return initial state', () => {
      expect(peopleReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should populate people', () => {
      const people = peopleReducer(
        initialState,
        setPeople({ people: peopleData })
      );
  
      expect(people).toEqual({
        pages: 0,
        people: peopleData,
        person: {},
        loading: false
      });
    });
  });
  