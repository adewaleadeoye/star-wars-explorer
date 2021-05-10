import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../../utils/test-utils';
import PeopleList from '../PeopleList'


describe('<PeopleList />  tests', () => {
  it('should render without crashing', () => {
    render(<PeopleList />);
  });
});
