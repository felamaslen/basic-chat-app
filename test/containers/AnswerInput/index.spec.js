/* eslint-disable newline-per-chained-call */
import { expect } from 'chai';
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import AnswerInputContainer, { AnswerInput } from '../../../src/containers/AnswerInput';
import * as C from '../../../src/constants/actions';

describe('<AnswerInput />', () => {
    const props = {
        id: 10,
        next: 3,
        type: 'number',
        range: 100,
        min: 0,
        max: 10,
        onAnswer: () => null
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<AnswerInputContainer {...props} />, createMockStore({})).dive();

        expect(wrapper.is('div.answer-box.answer-box-input')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render an interactive input with custom props', () => {
        const wrapper = mount(<AnswerInput {...props} />);

        const input = wrapper.childAt(0).childAt(0);

        expect(input.is('input.answer-input')).to.equal(true);
        expect(input.props()).to.deep.include({
            type: 'number',
            range: 100,
            min: 0,
            max: 10
        });

        expect(wrapper.state()).to.have.property('value', '');
        expect(input.props()).to.have.property('value', '');

        input.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.state()).to.have.property('value', 'foo');
        expect(wrapper.childAt(0).childAt(0).props()).to.have.property('value', 'foo');
    });

    it('should render a button', () => {
        const wrapper = shallow(<AnswerInputContainer {...props} />, createMockStore({})).dive();

        expect(wrapper.childAt(1).is('button.answer-box-input-button')).to.equal(true);
    });

    it('should answer the question when clicking the button', () => {
        const store = createMockStore({});

        const wrapper = shallow(<AnswerInputContainer {...props} />, store).dive();

        expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, text: 'foo', next: 3 }))
            .to.equal(false);

        wrapper.childAt(0).simulate('change', { target: { value: 'foo' } });

        wrapper.childAt(1).simulate('click');

        expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, text: 'foo', next: 3 }))
            .to.equal(true);
    });
});

