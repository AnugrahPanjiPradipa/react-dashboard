import { useState } from 'react';
import light from '../assets/logout-white.png';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    if (onLogout) {
      onLogout(navigate);
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-xl text-center p-4 shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.05] h-20 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:border-gray-600"
        onClick={() => setOpenModal(true)}
      >
        <img
          src={light}
          alt="Logout button"
          className="w-12 h-12 transition-transform duration-300 invert dark:invert-0"
        />
      </div>

      {openModal && (
        <LogoutModal
          onCancel={() => setOpenModal(false)}
          onConfirm={handleClick}
        />
      )}
    </>
  );
};

export default Logout;
