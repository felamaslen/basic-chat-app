import { expect } from 'chai';
import itEach from 'it-each';
itEach();
import '../../browser';
import React from 'react';
import { shallow } from 'enzyme';
import AnswerBox from '../../../src/components/AnswerBox';
import { TYPES } from '../../../src/constants/chat-tree';

import AnswerButtons from '../../../src/containers/AnswerButtons';
import AnswerSelect from '../../../src/containers/AnswerSelect';
import AnswerInput from '../../../src/containers/AnswerInput';
import AnswerLocation from '../../../src/containers/AnswerLocation';

describe('<AnswerBox />', () => {
    const props = { foo: 'bar' };

    it('should render an <AnswerButtons /> container with props', () => {
        const wrapper = shallow(<AnswerBox type={TYPES.BUTTON} {...props} />);

        expect(wrapper.is(AnswerButtons)).to.equal(true);
        expect(wrapper.props()).to.deep.equal(props);
    });

    it('should render an <AnswerSelect /> container with props', () => {
        const wrapper = shallow(<AnswerBox type={TYPES.SELECT} {...props} />);

        expect(wrapper.is(AnswerSelect)).to.equal(true);
        expect(wrapper.props()).to.deep.equal(props);
    });

    it.each([
        { type: 'text', typeCode: TYPES.INPUT_STRING },
        { type: 'number', typeCode: TYPES.INPUT_NUMBER }
    ], 'should render an <AnswerInput /> container with props and type', ({ type, typeCode }) => {
        const wrapper = shallow(<AnswerBox type={typeCode} {...props} />);

        expect(wrapper.is(AnswerInput)).to.equal(true);
        expect(wrapper.props()).to.deep.equal({ type, ...props });
    });

    it('should render an <AnswerLocation /> container with props', () => {
        const wrapper = shallow(<AnswerBox type={TYPES.LOCATION} {...props} />);

        expect(wrapper.is(AnswerLocation)).to.equal(true);
        expect(wrapper.props()).to.deep.equal(props);
    });
});

