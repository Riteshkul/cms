// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate API call to check credentials (replace with actual API request)
    if (username === 'editor' && password === 'editor') {
      dispatch(setUser({ username, role: 'editor' }));
      history('/dashboard'); // Navigate to the dashboard for editor
    } else if (username === 'admin' && password === 'admin') {
      dispatch(setUser({ username, role: 'admin' }));
      history('/dashboard'); // Navigate to the dashboard for admin
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
