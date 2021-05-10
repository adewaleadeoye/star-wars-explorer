import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import PlanetDetail from '../PlanetDetail';


describe('<PlanetDetail />  route tests', () => {
  it('should render without crashing', () => {
    render(<PlanetDetail />);
  });
});
