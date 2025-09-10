import moon from '../assets/moon.png';
import sun from '../assets/sunwhite.png';

const Theme = ({ setDarkMode, darkMode }) => {
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="bg-white rounded-xl text-center p-4 shadow-md border border-gray-200  transform transition-all duration-300 hover:shadow-lg hover:scale-[1.05] h-20 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:border-gray-600"
    >
      <img
        src={darkMode ? sun : moon}
        alt="Change Theme"
        className="w-12 h-12 transition-transform duration-300"
      />
    </div>
  );
};

export default Theme;
