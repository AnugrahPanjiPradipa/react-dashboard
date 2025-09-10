import Name from './Name';
import Weather from './Weather';
import Quotes from './Quotes';
import ToDo from './ToDo';
import NavBar from './NavBar';
import Theme from './Theme';
import Clock from './Clock';
import Logout from './Logout';

const Dashboard = ({ userName, activity, addNewActivity, deleteActivity, darkMode, setDarkMode, onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-violet-500 via-fuchsia-500 to-yellow-200 dark:from-purple-900 dark:via-pink-800 dark:to-red-900 transition-colors duration-500">
      <div className="grid grid-flow-col grid-col-1 gap-4 p-4">
        <Clock />
        <Name name={userName} />
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

      <div className="flex items-center gap-4 p-4 pt-0">
        <div className="flex-1">
          <NavBar />
        </div>
        <Theme
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Logout
          darkMode={darkMode}
          onLogout={onLogout}
        />
      </div>
    </div>
  );
};

export default Dashboard;
