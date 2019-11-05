import { ErrorMessageModel } from "../models/errorMessage.model";

export const setLoading = (isLoading: Boolean) => {
  return ({
    type: 'SET_LOADING',
    isLoading,
  });
};

export const setError = (errorMessage: ErrorMessageModel) => {
  return ({
    type: 'SET_ERROR',
    errorMessage,
  });
};