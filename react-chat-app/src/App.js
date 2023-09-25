// src/App.js
import React from 'react';
import MessageInput from './MessageInput';
import MessageDisplay from './MessageDisplay';
import { ChatProvider } from './ChatContext';

const App = () => {
  return (
    <ChatProvider>
      <div>
        <h1>Simple Chat App</h1>
        <MessageDisplay />
        <MessageInput />
      </div>
    </ChatProvider>
  );
};

export default App;
