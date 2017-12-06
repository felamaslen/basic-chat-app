import { connect } from 'react-redux';

import { questionAnswered } from '../../actions/chat.actions';

import React from 'react';
import PropTypes from 'prop-types';

function AnswerSelect({ options, onAnswer }) {
    const selectOptions = options.map(({ text, next }) =>
        <option key={text} value={JSON.stringify({ text, next })}>
            {text}
        </option>
    );

    return <div className="answer-box answer-box-select">
        <select className="answer-select-list" defaultValue="" onChange={evt => onAnswer(evt.target.value)}>
            <option value="" />
            {selectOptions}
        </select>
    </div>;
}

AnswerSelect.propTypes = {
    options: PropTypes.array.isRequired,
    onAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: value => dispatch(questionAnswered({ id: ownProps.id, ...JSON.parse(value) }))
});

export default connect(null, mapDispatchToProps)(AnswerSelect);


