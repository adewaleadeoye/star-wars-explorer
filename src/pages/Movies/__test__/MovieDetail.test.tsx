import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import MoviesDetail from '../MovieDetail';


describe('<MoviesDetail />  route tests', () => {
  it('should render without crashing', () => {
    render(<MoviesDetail />);
  });
});
