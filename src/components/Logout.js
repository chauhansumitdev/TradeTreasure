import React from 'react';
import { useAuth } from './AuthContext';

const Logout = () => {
  const { authState, dispatch } = useAuth();

  const handleLogout = () => {
    //TODO : Perform logout logic, e.g., clear user data or call a logout API
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
        <div className="buffer"></div>
      <h2>Logout</h2>
      {authState.isAuthenticated ? (
        <div>
          <p>Are you sure you want to logout, {authState.user.username}?</p>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>You are already logged out.</p>
      )}
    </div>
  );
};

export default Logout;
