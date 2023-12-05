// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ContentManagement from './components/ContentManagement';
import './App.css'; // Add styling for App

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content-management" element={<ContentManagement />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
