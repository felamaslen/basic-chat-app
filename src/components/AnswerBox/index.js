import React from 'react';
import PropTypes from 'prop-types';

import { TYPES } from '../../constants/chat-tree';

import AnswerButtons from '../../containers/AnswerButtons';
import AnswerSelect from '../../containers/AnswerSelect';
import AnswerInput from '../../containers/AnswerInput';
import AnswerLocation from '../../containers/AnswerLocation';

export default function AnswerBox({ type, ...props }) {
    if (type === TYPES.BUTTON) {
        return <AnswerButtons {...props} />;
    }

    if (type === TYPES.SELECT) {
        return <AnswerSelect {...props} />;
    }

    if (type === TYPES.INPUT_STRING) {
        return <AnswerInput {...props} type="text" />;
    }

    if (type === TYPES.INPUT_NUMBER) {
        return <AnswerInput {...props} type="number" />;
    }

    if (type === TYPES.LOCATION) {
        return <AnswerLocation {...props} />;
    }

    return null;
}

AnswerBox.propTypes = {
    type: PropTypes.number.isRequired
};

