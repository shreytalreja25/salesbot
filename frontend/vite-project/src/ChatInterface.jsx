import React, { useState, useEffect } from 'react';

const ChatInterface = ({ initialMessage }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (initialMessage) {
      setMessages([{ sender: 'bot', text: initialMessage }]);
    }
  }, [initialMessage]);

  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.message };
    setMessages([...messages, userMessage, botMessage]);

    setInput('');
  };

  return (
    <div className="chat-container">
      <h1>Dwight the AI Sales Assistant</h1>
      <p>For Dunder Mifflin</p>
      <div className="chatBox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'userMessage' : 'botMessage'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInterface;
