import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Home from '../index';


describe('<Home />  route tests', () => {
  it('should render without crashing', () => {
    render(<Home />);
  });
});
