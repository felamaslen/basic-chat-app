import React from 'react';
import PropTypes from 'prop-types';

import AnswerBox from '../AnswerBox';

export default function NextQuestion({ id, question, answer }) {
    // here, answer is an object specifying the options and type of answer for this question

    if (id) {
        return <div className="next-question">
            <span className="question">{question}</span>
            <AnswerBox id={id} {...answer} />
        </div>;
    }

    return <div className="chatbot-finished">
        {'You completed it mate!'}
    </div>;
}

NextQuestion.propTypes = {
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.object
};

