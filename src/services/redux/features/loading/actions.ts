import { Action } from "redux";

const LOADING_FEATURE = "loading";

export const START_LOADING: string = `${LOADING_FEATURE}/START_LOADING`;
export const STOP_LOADING: string = `${LOADING_FEATURE}/STOP_LOADING`;

export const startLoading = (): Action => ({
  type: START_LOADING,
});

export const stopLoading = (): Action => ({
  type: STOP_LOADING,
});
