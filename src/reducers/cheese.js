import {FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_ERROR,
  ADD_CHEESE,
  CLEAR_ADD_CHEESE} from '../actions/cheese';

const initialState = {
  loading: false,
  cheeses: [],
  error: null,
  cheeseToAdd: ''
}  

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {loading: true});
    case FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        cheeses: action.cheeses
      });
    case FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      }); 
    case ADD_CHEESE:
      return Object.assign({}, state, {cheeseToAdd: action.cheese});     
    case CLEAR_ADD_CHEESE:
      return Object.assign({}, state, {cheeseToAdd: ''});  
    default: 
      return state 
  } 
}