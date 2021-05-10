import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import People from '../index';


describe('<People />  route tests', () => {
  it('should render without crashing', () => {
    render(<People />);
  });
});
