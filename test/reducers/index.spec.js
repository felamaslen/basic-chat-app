import { expect } from 'chai';
import reducer from '../../src/reducers';
import state from '../../src/state';
import * as chatActions from '../../src/actions/chat.actions';
import * as chatReducer from '../../src/reducers/chat.reducer';

describe('Global reducer', () => {
    describe('QUESTION_ANSWERED', () => {
        it('should run answerQuestion reducer', () => {
            expect(reducer(state, chatActions.questionAnswered({ id: 1 })))
                .to.deep.equal(chatReducer.answerQuestion(state, { id: 1 }));
        });
    });
});

