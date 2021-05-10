import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import PlanetsList from '../PlanetsList';

describe('<PlanetsList />  tests', () => {
  it('should render without crashing', () => {
    render(<PlanetsList />);
  });
});
