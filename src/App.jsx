import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import InputName from './components/InputName';
import Dashboard from './components/Dashboard';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') return true;
    if (localStorage.theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const [activity, setActivity] = useState([]);
  const [userName, setUserName] = useState(() => sessionStorage.getItem('userName') || '');

  useEffect(() => {
    if (userName) {
      sessionStorage.setItem('userName', userName);
    }
  }, [userName]);

  function addNewActivity(activity) {
    setActivity((prev) => [...prev, activity]);
  }

  function deleteActivity(id) {
    setActivity((prev) => prev.filter((item) => item.id !== id));
  }

  function handleLogout(navigate) {
    setUserName('');
    setActivity([]);
    sessionStorage.removeItem('userName');
    navigate('/');
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<InputName setUserName={setUserName} />}
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            userName={userName}
            activity={activity}
            addNewActivity={addNewActivity}
            deleteActivity={deleteActivity}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onLogout={handleLogout}
          />
        }
      />
    </Routes>
  );
};

export default App;
