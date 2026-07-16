import React from 'react';
import { Login as LoginForm } from '../components/LMSComponents';
import PasswordStrength from '../components/PasswordStrength';

function Login() {
  return (
    <div>
      <LoginForm />
      <PasswordStrength />
    </div>
  );
}

export default Login;
