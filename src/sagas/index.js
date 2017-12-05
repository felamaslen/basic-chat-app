import { fork, takeEvery, call, put } from 'redux-saga/effects';

import * as actions from '../constants/actions';
import { inputChanged } from '../actions/app.actions';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function *delayedResponse() {
    yield call(delay, 2000);

    yield put(inputChanged(''));
}

export function *watchButtonClicked() {
    yield takeEvery(actions.BUTTON_CLICKED, delayedResponse);
}

export default function *rootSaga() {
    yield fork(watchButtonClicked);
}

