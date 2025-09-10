import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputName = ({ setUserName }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setUserName(name);
      setName('');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-violet-500 via-fuchsia-500 to-yellow-200 dark:from-purple-900 dark:via-pink-800 dark:to-red-900 transition-colors duration-500 p-6">
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 max-w-md w-full text-center backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Enter your name</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write your name here..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-pink-800 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-yellow-400 dark:from-purple-900 dark:via-pink-800 dark:to-red-900 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputName;
