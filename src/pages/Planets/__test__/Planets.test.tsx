import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Planets from '../index';


describe('<Planets />  route tests', () => {
  it('should render without crashing', () => {
    render(<Planets />);
  });
});
