/* eslint-disable newline-per-chained-call */
import { expect } from 'chai';
import itEach from 'it-each';
itEach();
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import AnswerSelect from '../../../src/containers/AnswerSelect';
import * as C from '../../../src/constants/actions';

describe('<AnswerSelect />', () => {
    const props = {
        id: 10,
        options: [
            { text: 'foo', next: 1 },
            { text: 'bar', next: 2 }
        ]
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<AnswerSelect {...props} />, createMockStore({})).dive();

        expect(wrapper.is('div.answer-box.answer-box-select')).to.equal(true);
        expect(wrapper.children()).to.have.length(1);
    });

    describe('select list', () => {
        let key = null;
        beforeEach(() => {
            key = 0;
        });
        afterEach(() => {
            key = null;
        });

        it('should be rendered', () => {
            const wrapper = shallow(<AnswerSelect {...props} />, createMockStore({})).dive();

            expect(wrapper.childAt(0).is('select.answer-select-list')).to.equal(true);
            expect(wrapper.childAt(0).props()).to.have.property('defaultValue', '');
        });

        it('should render a default selected blank option', () => {
            const wrapper = shallow(<AnswerSelect {...props} />, createMockStore({})).dive();

            expect(wrapper.childAt(0).children()).to.have.length(props.options.length + 1);
            expect(wrapper.childAt(0).childAt(0).is('option[value=""]')).to.equal(true);
        });

        it.each(props.options, 'should render list of options', ({ text, next }) => {
            const wrapper = shallow(<AnswerSelect {...props} />, createMockStore({})).dive();
            const option = wrapper.childAt(0).childAt(key + 1);

            expect(option.is('option')).to.equal(true);
            expect(option.props()).to.have.property('value', JSON.stringify({ text, next }));

            key++;
        });

        it.each(props.options, 'should answer the question on change', ({ text, next }) => {
            const store = createMockStore({});

            const wrapper = shallow(<AnswerSelect {...props} />, store).dive();
            const option = wrapper.childAt(0).childAt(key + 1);

            const action = { type: C.QUESTION_ANSWERED, id: 10, text, next };

            expect(store.isActionDispatched(action)).to.equal(false);

            wrapper.childAt(0).simulate('change', { target: { value: option.prop('value') } });
            expect(store.isActionDispatched(action)).to.equal(true);

            key++;
        });
    });
});

