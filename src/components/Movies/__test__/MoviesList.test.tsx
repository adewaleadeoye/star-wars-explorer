import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import MoviesList from '../MoviesList';

describe('<MoviesList />  tests', () => {
  it('should render without crashing', () => {
    render(<MoviesList />);
  });
});
