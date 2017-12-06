import { expect } from 'chai';
import itEach from 'it-each';
itEach();
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import AnswerButtons from '../../../src/containers/AnswerButtons';
import * as C from '../../../src/constants/actions';

describe('<AnswerButtons />', () => {
    const state = {};

    const props = {
        id: 10,
        options: [
            { text: 'foo', next: 1 },
            { text: 'bar', next: 2 }
        ]
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<AnswerButtons {...props} />, createMockStore(state)).dive();

        expect(wrapper.is('div.answer-box.answer-box-buttons')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    describe('buttons', () => {
        let key = null;
        beforeEach(() => {
            key = 0;
        });
        afterEach(() => {
            key = null;
        });

        it.each(props.options, 'should be rendered', ({ text }) => {
            const wrapper = shallow(<AnswerButtons {...props} />, createMockStore(state)).dive();

            expect(wrapper.childAt(key).is('button.answer-button')).to.equal(true);
            expect(wrapper.childAt(key).text()).to.equal(text);

            key++;
        });

        it.each(props.options, 'should answer the question on click', ({ text, next }) => {
            const store = createMockStore(state);

            const wrapper = shallow(<AnswerButtons {...props} />, store).dive();

            expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, text, next })).to.equal(false);

            wrapper.childAt(key).simulate('click');
            expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, text, next })).to.equal(true);

            key++;
        });
    });
});

