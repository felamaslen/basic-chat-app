import { connect } from 'react-redux';

import React from 'react';
import PropTypes from 'prop-types';

import AnsweredQuestion from '../../components/AnsweredQuestion';
import NextQuestion from '../../components/NextQuestion';

function ChatBot({ answered, nextQuestion }) {
    const answeredQuestions = answered.map(({ id, ...question }) =>
        <AnsweredQuestion key={id} {...question} />);

    return <div className="chatbot-outer">
        <div className="answered-questions">
            {answeredQuestions}
        </div>
        <div className="next-question">
            <NextQuestion {...nextQuestion} />
        </div>
    </div>;
}

ChatBot.propTypes = {
    answered: PropTypes.array.isRequired,
    nextQuestion: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    answered: state.questionsAnswered,
    nextQuestion: state.nextQuestion
});

export default connect(mapStateToProps)(ChatBot);

