import { expect } from 'chai';
import * as R from '../../src/reducers/chat.reducer';

import { TYPES } from '../../src/constants/chat-tree';

describe('Chat reducer', () => {
    describe('answerQuestion', () => {
        const state = {
            questionsAnswered: []
        };

        let nextState = null;

        it('should add answered question to the state and prompt for the next question', () => {
            nextState = R.answerQuestion(state, { id: 1, text: 'Right', next: 3 });

            expect(nextState).to.deep.equal({
                questionsAnswered: [
                    { id: 1, question: 'Left or right?', answer: 'Right' }
                ],
                nextQuestion: {
                    id: 3,
                    question: 'What is your name?',
                    answer: {
                        type: TYPES.INPUT_STRING,
                        next: 5
                    }
                }
            });

            nextState = R.answerQuestion(nextState, { id: 3, text: 'Some name', next: 5 });

            expect(nextState).to.deep.equal({
                questionsAnswered: [
                    { id: 1, question: 'Left or right?', answer: 'Right' },
                    { id: 3, question: 'What is your name?', answer: 'Some name' }
                ],
                nextQuestion: {
                    id: 5,
                    question: 'What is your favourite colour?',
                    answer: {
                        type: TYPES.SELECT,
                        options: [
                            { text: 'Red', next: -1 },
                            { text: 'Blue', next: -1 }
                        ]
                    }
                }
            });
        });

        it('should reset the next question to an empty object once finished', () => {
            nextState = R.answerQuestion(nextState, { id: 5, text: 'Red', next: -1 });

            expect(nextState).to.deep.equal({
                questionsAnswered: [
                    { id: 1, question: 'Left or right?', answer: 'Right' },
                    { id: 3, question: 'What is your name?', answer: 'Some name' },
                    { id: 5, question: 'What is your favourite colour?', answer: 'Red' }
                ],
                nextQuestion: {}
            });
        });
    });
});

