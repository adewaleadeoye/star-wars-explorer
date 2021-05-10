import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Movies from '../index';


describe('<Movies />  route tests', () => {
  it('should render without crashing', () => {
    render(<Movies />);
  });
});
