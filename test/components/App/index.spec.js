import { expect } from 'chai';
import '../../browser';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';
import ChatBot from '../../../src/containers/ChatBot';

describe('<App />', () => {
    it('should render its basic structure', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.is('div.basic-chatbot-app')).to.equal(true);
        expect(wrapper.children()).to.have.length(1);
    });

    it('should render a <ChatBot /> container', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.childAt(0).is(ChatBot)).to.equal(true);
    });
});

