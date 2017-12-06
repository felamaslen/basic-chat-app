import { expect } from 'chai';
import '../../browser';
import React from 'react';
import { shallow } from 'enzyme';
import AnsweredQuestion from '../../../src/components/AnsweredQuestion';

describe('<AnsweredQuestion />', () => {
    const props = {
        question: 'question',
        answer: 'answer'
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<AnsweredQuestion {...props} />);

        expect(wrapper.is('div.answered-question-outer')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render a question span', () => {
        const wrapper = shallow(<AnsweredQuestion {...props} />);

        expect(wrapper.childAt(0).is('span.question')).to.equal(true);
        expect(wrapper.childAt(0).text()).to.equal('question');
    });

    it('should render an answer span', () => {
        const wrapper = shallow(<AnsweredQuestion {...props} />);

        expect(wrapper.childAt(1).is('span.answer')).to.equal(true);
        expect(wrapper.childAt(1).text()).to.equal('answer');
    });
});

