import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
  return ({
    type: FETCH_CHEESES_REQUEST
  });
};

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => {
  return ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  });
};

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => {
  return ({
    type: FETCH_CHEESES_ERROR,
    error
  });
};

export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/api/cheeses`)
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => dispatch(fetchCheesesSuccess(res)))
  .catch(err => dispatch(fetchCheesesError(err)));

}