import light from '../assets/logout-white.png';

const Logout = () => {
  return (
    <div className="bg-white rounded-xl text-center p-4 shadow-md border border-gray-200  transform transition-all duration-300 hover:shadow-lg hover:scale-[1.05] h-20 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:border-gray-600">
      <img
        src={light}
        alt="Logout button"
        className="w-12 h-12 transition-transform duration-300 invert dark:invert-0"
      />
    </div>
  );
};

export default Logout;
