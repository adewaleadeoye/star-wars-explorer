import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store as appStore } from '../app/store';

export const appInitialState = {
  peopleReducer: {
    pages: 0,
    people: [],
    person: {},
    loading: false,
  },
  moviesReducer: {
    pages: 0,
    movies: [],
    movie: {},
    loading: false,
  },
  planetsReducer: {
    pages: 0,
    planets: [],
    planet: {},
    loading: false,
  },
  alertReducer: {
    open: false,
  },
  headerReducer: {},
};

function render(
  ui:any,
  {
    initialState = appInitialState,
    store = appStore,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  }:any = {}
) {
  function Wrapper({ children }:any) {
    let componentWrapper = (
      <Provider store={store}>
        <Router history={history}>
          <Switch>{children}</Switch>
        </Router>
      </Provider>
    );

    return componentWrapper;
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
    store,
    route,
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
