import React, { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am your AI learning assistant.' },
  ]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { from: 'user', text },
      {
        from: 'bot',
        text: text.toLowerCase().includes('course')
          ? 'You can explore the courses section for recommendations.'
          : 'I can help you with learning support and course information.',
      },
    ]);
    setInput('');
  };

  return (
    <div className="section-card">
      <h2>AI Chatbot</h2>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <p key={index} style={{ margin: '6px 0' }}>
            <strong>{message.from === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px' }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
