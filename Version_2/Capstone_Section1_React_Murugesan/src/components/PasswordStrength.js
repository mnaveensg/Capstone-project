import React, { useState } from 'react';

function PasswordStrength() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const checkStrength = () => {
    const hasNumber = /\d/.test(password);

    if (password.length < 6) {
      setResult('Weak password');
    } else if (password.length >= 6 && hasNumber) {
      setResult('Strong password');
    } else {
      setResult('Weak password');
    }
  };

  return (
    <div className="section-card">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', display: 'block', width: '100%', padding: '8px' }}
      />
      <button onClick={checkStrength} style={{ padding: '8px 16px' }}>
        Check Strength
      </button>
      {result && (
        <p
          style={{
            marginTop: '10px',
            fontWeight: 'bold',
            color: result === 'Strong password' ? 'green' : 'red',
          }}
        >
          {result}
        </p>
      )}
    </div>
  );
}

export default PasswordStrength;
