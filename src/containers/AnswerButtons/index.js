import { connect } from 'react-redux';

import { questionAnswered } from '../../actions/chat.actions';

import React from 'react';
import PropTypes from 'prop-types';

function AnswerButtons({ options, onAnswer }) {
    const buttons = options.map(({ text, next }) =>
        <button key={next} className="answer-button" onClick={() => onAnswer(text, next)}>
            {text}
        </button>
    );

    return <div className="answer-box answer-box-buttons">
        {buttons}
    </div>;
}

AnswerButtons.propTypes = {
    options: PropTypes.array.isRequired,
    onAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: (text, next) => dispatch(questionAnswered({ id: ownProps.id, text, next }))
});

export default connect(null, mapDispatchToProps)(AnswerButtons);

