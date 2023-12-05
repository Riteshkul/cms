// Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const editorActions = useSelector((state) => state.editorActions);
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/')

  };

  return (
    <div className="dashboard-container">
      <header>
        {user && (
          <h2>Welcome, {user.username} ({user.role})</h2>
        )}
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <section>
          <h3>Your Dashboard</h3>
          {user?.role === 'admin' && (
            <div>
              <h4>Recent Editor Actions:</h4>
              <ul>
                {editorActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4>Recent Content:</h4>
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <p>Customize this space based on your role.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
