import { Actions } from '../actions/actions';
import * as ActionTypes from '../actions/actionTypes';
import { initialState } from '../store/store';
import { IState } from '../types/IState';



export const testReducer = (state = initialState, action: Actions): IState => {
  switch (action.type) {
    case ActionTypes.TEST_ACTION:
      const { payload: newText } = action;
      const newState = { ...state, text: newText};
      return newState; 
    case ActionTypes.TEST_ACTION_WITHOUT_PAYLOAD:
      return {
        ...state,
        change: !state.change
      }
    default:
      return state;
  }
}