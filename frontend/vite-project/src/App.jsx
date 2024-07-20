import React, { useState } from 'react';
import LeadForm from './LeadForm';
import ChatInterface from './ChatInterface';
import './App.css';

const App = () => {
  const [initialMessage, setInitialMessage] = useState('Welcome to Dunder Mifflin. Fill the form to chat with me!');

  return (
    <div className="container">
      <div className="form-container">
        <LeadForm setInitialMessage={setInitialMessage} />
      </div>
      <div className="chat-container">
        <ChatInterface initialMessage={initialMessage} />
      </div>
    </div>
  );
};

export default App;
