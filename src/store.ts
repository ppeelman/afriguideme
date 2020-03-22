import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { I18nReducer } from "./i18n/i18n.store";
import { CurrentStepReducer } from "./stepper/CurrentStep.store";

export interface Store {
  locale: string;
  currentStep: number;
}

export interface StoreAction<T> {
  type: string;
  payload: T;
}

const reducers = combineReducers<Store>({
  locale: I18nReducer,
  currentStep: CurrentStepReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
