// src/MessageDisplay.js
import React from 'react';
import { useChat } from './ChatContext';

const MessageDisplay = () => {
  const { messages } = useChat();

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default MessageDisplay;
