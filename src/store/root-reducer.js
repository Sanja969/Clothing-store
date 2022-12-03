/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReduser } from './categories/categories.reducer';
import { cardReducer } from './card/card.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReduser,
  card: cardReducer,
});
