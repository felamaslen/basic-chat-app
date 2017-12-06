import { expect } from 'chai';
import '../../browser';
import React from 'react';
import { shallow } from 'enzyme';
import NextQuestion from '../../../src/components/NextQuestion';
import AnswerBox from '../../../src/components/AnswerBox';

describe('<NextQuestion />', () => {
    const props = {
        id: 1,
        question: 'question',
        answer: {
            type: 2,
            next: 3
        }
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<NextQuestion {...props} />);

        expect(wrapper.is('div.next-question')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render a question span', () => {
        const wrapper = shallow(<NextQuestion {...props} />);

        expect(wrapper.childAt(0).is('span.question')).to.equal(true);
        expect(wrapper.childAt(0).text()).to.equal('question');
    });

    it('should render an <AnswerBox /> with id an answer props', () => {
        const wrapper = shallow(<NextQuestion {...props} />);

        expect(wrapper.childAt(1).is(AnswerBox)).to.equal(true);

        expect(wrapper.childAt(1).props()).to.deep.equal({
            id: 1,
            type: 2,
            next: 3
        });
    });
});

