import React from 'react';
import PropTypes from 'prop-types';

export default function AnsweredQuestion({ question, answer }) {
    return <div className="answered-question-outer">
        <span className="question">{question}</span>
        <span className="answer">{answer}</span>
    </div>;
}

AnsweredQuestion.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

