import { connect } from 'react-redux';

import { questionAnswered } from '../../actions/chat.actions';

import React from 'react';
import PropTypes from 'prop-types';

function AnswerLocation({ next, onAnswer }) {
    return <div className="answer-box answer-box-location">
        <button onClick={() => onAnswer('Bristol', next)}>{'Bristol'}</button>
    </div>;
}

AnswerLocation.propTypes = {
    next: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: (text, next) => dispatch(questionAnswered({ id: ownProps.id, text, next }))
});

export default connect(null, mapDispatchToProps)(AnswerLocation);


