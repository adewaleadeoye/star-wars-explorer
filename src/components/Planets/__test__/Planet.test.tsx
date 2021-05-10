import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import Planet from '../Planet';


describe('<Planet />  tests', () => {
  it('should render without crashing', () => {
    render(<Planet />);
  });
});
