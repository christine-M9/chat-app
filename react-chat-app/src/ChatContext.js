// src/ChatContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import io from 'socket.io-client';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:5000'); // Replace with your server URL

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]); // Include 'socket' in the dependencies array

  const addMessage = (message) => {
    setMessages([...messages, message]);
    socket.emit('message', message);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export { ChatProvider, useChat };

