import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Movie from '../Movie';


describe('<Movie />  tests', () => {
  it('should render without crashing', () => {
    render(<Movie />);
  });
});
