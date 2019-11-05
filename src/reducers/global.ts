import { ErrorMessageModel } from "../models/errorMessage.model";

export interface IGlobalState {
  isLoading: Boolean;
  error?: ErrorMessageModel;
}

export const globalInitialState: IGlobalState = {
  isLoading: false,
  error: undefined,
}

export const global = (state: IGlobalState = globalInitialState, action: any) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'SET_ERROR':
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};