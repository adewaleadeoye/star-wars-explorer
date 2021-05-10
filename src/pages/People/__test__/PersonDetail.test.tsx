import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import PersonDetail from '../PersonDetail';


describe('<PersonDetail />  route tests', () => {
  it('should render without crashing', () => {
    render(<PersonDetail />);
  });
});
