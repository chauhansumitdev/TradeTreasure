import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const { dispatch } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO : Perform login logic, e.g., call an API
    const user = { username }; // Assuming you get the user data from the login API
    dispatch({ type: 'LOGIN', payload: user });
  };

  return (
    <div>
      <div className="buffer"></div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
