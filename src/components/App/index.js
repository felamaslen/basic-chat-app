import React from 'react';

import ChatBot from '../../containers/ChatBot';

export default function App() {
    let version = 0;
    if (typeof APP_VERSION === 'string') {
        version = APP_VERSION; // eslint-disable-line no-undef
    }
    const className = `basic-chatbot-app version-${version}`;

    return <div className={className}>
        <ChatBot />
    </div>;
}

