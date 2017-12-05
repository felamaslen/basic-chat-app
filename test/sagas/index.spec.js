/* eslint-disable prefer-reflect */
import { testSaga } from 'redux-saga-test-plan';
import * as S from '../../src/sagas';
import * as A from '../../src/actions/app.actions';

describe('Root saga', () => {
    describe('delayedResponse', () => {
        it('should wait for 2 seconds, then reset the input value', () => {
            testSaga(S.delayedResponse)
                .next()
                .call(S.delay, 2000)
                .next()
                .put(A.inputChanged(''))
                .next()
                .isDone();
        });
    });
});

