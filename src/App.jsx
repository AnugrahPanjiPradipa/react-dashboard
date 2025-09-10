import React, { useEffect, useState } from 'react';
import Clock from './components/Clock';
import Name from './components/Name';
import Weather from './components/Weather';
import Quotes from './components/Quotes';
import ToDo from './components/ToDo';
import NavBar from './components/NavBar';
import Theme from './components/Theme';
import InputName from './components/InputName';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    } else if (localStorage.theme === 'light') {
      return false;
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  const [activity, setActivity] = useState([]);

  // const [name, setName] = useState('');
  // const [userName, setUserName] = useState(() => {
  //   return sessionStorage.getItem('userName') || '';
  // });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  // useEffect(() => {
  //   if (userName) {
  //     sessionStorage.setItem('userName', userName);
  //   }
  // }, [userName]);

  function addNewActivity(activity) {
    setActivity((prev) => [...prev, activity]);
  }

  function deleteActivity(id) {
    setActivity((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-bl from-violet-500 via-fuchsia-500 to-yellow-200  
                 dark:from-purple-900 dark:via-pink-800 dark:to-red-900
                 transition-colors duration-500"
    >
      {/* <InputName
        name={name}
        setName={setName}
        setUserName={setUserName}
      /> */}
      <div className="grid grid-flow-col grid-col-1 gap-4 p-4">
        <Clock />
        {/* <Name name={userName} /> */}
        <Weather />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-0">
        <div>
          <Quotes />
        </div>
        <div>
          <ToDo
            activity={activity}
            addNewActivity={addNewActivity}
            deleteActivity={deleteActivity}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-flow-col p-4 pt-0 gap-4">
        <div className="col-span-3">
          <NavBar />
        </div>
        <div className="col-span-1">
          <Theme
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
