import questions from '../constants/chat-tree';

export function answerQuestion(state, { id, text, next }) {
    const { question } = questions.find(({ id: questionId }) => questionId === id);

    const answeredQuestion = { id, question, answer: text };

    let nextQuestion = {};
    if (next > -1) {
        nextQuestion = questions.find(({ id: questionId }) => questionId === next);
    }

    return {
        ...state,
        questionsAnswered: [
            ...state.questionsAnswered,
            answeredQuestion
        ],
        nextQuestion
    };
}

