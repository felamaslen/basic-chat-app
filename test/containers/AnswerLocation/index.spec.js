import { expect } from 'chai';
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import AnswerLocation from '../../../src/containers/AnswerLocation';
import * as C from '../../../src/constants/actions';

describe('<AnswerLocation />', () => {
    const props = {
        id: 10,
        next: 3
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<AnswerLocation {...props} />, createMockStore({})).dive();

        expect(wrapper.is('div.answer-box.answer-box-location')).to.equal(true);
        expect(wrapper.children()).to.have.length(1);
    });

    it('should render a button', () => {
        const wrapper = shallow(<AnswerLocation {...props} />, createMockStore({})).dive();

        expect(wrapper.childAt(0).is('button')).to.equal(true);
    });

    it('should answer the question when the button is clicked', () => {
        const store = createMockStore({});

        const wrapper = shallow(<AnswerLocation {...props} />, store).dive();

        expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, next: 3, text: 'Bristol' }))
            .to.equal(false);

        wrapper.childAt(0).simulate('click');

        expect(store.isActionDispatched({ type: C.QUESTION_ANSWERED, id: 10, next: 3, text: 'Bristol' }))
            .to.equal(true);
    });
});

