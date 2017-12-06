import { connect } from 'react-redux';

import { questionAnswered } from '../../actions/chat.actions';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AnswerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }
    render() {
        const { next, type, onAnswer, ...props } = this.props;

        const onChange = evt => this.setState({ value: evt.target.value });

        return <div className="answer-box answer-box-input">
            <input className="answer-input" type={type} {...props} value={this.state.value}
                onChange={onChange} />
            <button className="answer-box-input-button"
                onClick={() => onAnswer(this.state.value, next)}>
                {'Enter!'}
            </button>
        </div>;
    }
}

AnswerInput.propTypes = {
    next: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: (text, next) => dispatch(questionAnswered({ id: ownProps.id, text, next }))
});

export default connect(null, mapDispatchToProps)(AnswerInput);

