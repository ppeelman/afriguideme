// EXTERNAL
import { applyMiddleware, combineReducers, createStore, Store, StoreEnhancer } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//
// INTERNAL
// Reducers
import i18nReducer from "./i18n/I18n.store";
import activitiesReducer from "./activity/Activity.store";
import accommodationsReducer from "./accommodation/Accommodation.store";
import bookingsReducer from "./booking/Booking.store";

const rootReducer = combineReducers({
  locale: i18nReducer,
  activities: activitiesReducer,
  accommodations: accommodationsReducer,
  bookings: bookingsReducer
});

export type RootState = ReturnType<typeof rootReducer>; // https://redux.js.org/recipes/usage-with-typescript

// Important to use the Redux devtools extension!
// https://redux.js.org/recipes/configuring-your-store#integrating-the-devtools-extension

const middlewareEnhancer: StoreEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers: StoreEnhancer = composeWithDevTools(middlewareEnhancer);

const store: Store = createStore(rootReducer, composedEnhancers);

export default store;
