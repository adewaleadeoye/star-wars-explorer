import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Person from '../Person'


describe('<Person />  tests', () => {
  it('should render without crashing', () => {
    render(<Person />);
  });
});
