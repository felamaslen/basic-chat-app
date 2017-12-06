/* eslint-disable newline-per-chained-call */
import { expect } from 'chai';
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import ChatBot from '../../../src/containers/ChatBot';
import AnsweredQuestion from '../../../src/components/AnsweredQuestion';
import NextQuestion from '../../../src/components/NextQuestion';

describe('<ChatBot />', () => {
    const state = {
        questionsAnswered: [
            { id: 1, question: 'foo', answer: 'bar' },
            { id: 2, question: 'baz', answer: 'bav' }
        ],
        nextQuestion: {
            foo: 'bar'
        }
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<ChatBot />, createMockStore(state)).dive();

        expect(wrapper.is('div.chatbot-outer')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render answered questions', () => {
        const wrapper = shallow(<ChatBot />, createMockStore(state)).dive();

        expect(wrapper.childAt(0).is('div.answered-questions')).to.equal(true);
        expect(wrapper.childAt(0).children()).to.have.length(2);

        expect(wrapper.childAt(0).childAt(0).is(AnsweredQuestion)).to.equal(true);
        expect(wrapper.childAt(0).childAt(0).props()).to.deep.equal({
            question: 'foo',
            answer: 'bar'
        });

        expect(wrapper.childAt(0).childAt(1).is(AnsweredQuestion)).to.equal(true);
        expect(wrapper.childAt(0).childAt(1).props()).to.deep.equal({
            question: 'baz',
            answer: 'bav'
        });
    });

    it('should render the next question', () => {
        const wrapper = shallow(<ChatBot />, createMockStore(state)).dive();

        expect(wrapper.childAt(1).is('div.next-question')).to.equal(true);
        expect(wrapper.childAt(1).children()).to.have.length(1);
        expect(wrapper.childAt(1).childAt(0).is(NextQuestion)).to.equal(true);
        expect(wrapper.childAt(1).childAt(0).props()).to.deep.equal({ foo: 'bar' });
    });
});

