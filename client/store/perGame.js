import axios from 'axios';

// Action Types
const SET_PER_GAME = 'SET_PER_GAME';

// Action Creators
const setPerGame = (perGame) => {
  return {
    type: SET_PER_GAME,
    perGame,
  };
};

// Thunk Creators
export const fetchPerGame = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/perGame');
    dispatch(setPerGame(data));
  } catch (error) {
    console.error(error);
  }
};

// Reducer & Initial State
const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PER_GAME:
      return [...action.perGame];
    default:
      return state;
  }
}
