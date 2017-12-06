import { createReducer } from 'redux-create-reducer';

import * as actions from '../constants/actions';

// import all your reducer functions here
// the reducers are what carry out application logic, and they are
// all pure functions of the immutable application state (which is global)
import * as chat from './chat.reducer';

import initialState from '../state';

const reducers = [
    [actions.QUESTION_ANSWERED, chat.answerQuestion]
];

const createReducerObject = array => array.reduce((last, item) => ({
    ...last,
    [item[0]]: (state, action) => item[1](state, action)
}), {});

export default createReducer(initialState, createReducerObject(reducers));

