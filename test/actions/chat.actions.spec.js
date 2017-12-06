import { expect } from 'chai';
import * as A from '../../src/actions/chat.actions';
import * as C from '../../src/constants/actions';

describe('Chat actions', () => {
    describe('questionAnswered', () => {
        it('should return QUESTION_ANSWERED with a request object', () => {
            expect(A.questionAnswered({ foo: 'bar', bar: 'baz' })).to.deep.equal({
                type: C.QUESTION_ANSWERED,
                foo: 'bar',
                bar: 'baz'
            });
        });
    });
});

