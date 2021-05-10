import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import peopleReducer from '../components/People/peopleSlice';
import moviesReducer from '../components/Movies/moviesSlice';
import planetsReducer from '../components/Planets/planetsSlice'
import alertReducer from '../components/Alert/alertSlice'
import headerReducer from '../components/Layout/Header/headerSlice'

export const store = configureStore({
  reducer: {
    peopleReducer,
    moviesReducer,
    planetsReducer,
    alertReducer,
    headerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
