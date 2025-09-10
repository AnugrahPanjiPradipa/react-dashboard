import FormActivity from './FormActivity';
import { X, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToDo = ({ activity, addNewActivity, deleteActivity }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [done, setDone] = useState({});

  const toggleDone = (id) => {
    setDone((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative bg-white rounded-xl text-center p-4 shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-110 dark:bg-gray-800 dark:border-gray-600 overflow-y-auto">
      <div className="text-lg font-semibold p-3 dark:text-gray-200">To-Do List✅</div>
      <div className="relative h-10 flex justify-center items-center">
        <AnimatePresence mode="wait">
          {openMenu ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FormActivity
                setOpenMenu={setOpenMenu}
                addNewActivity={addNewActivity}
              />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button
                onClick={() => setOpenMenu(true)}
                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                <Plus size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ul className="mt-4">
        <AnimatePresence>
          {activity.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              layout
              className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm border border-gray-200 dark:border-gray-600 mb-2 hover:scale-[1.01] transition-all duration-200"
            >
              <span className={`${done[item.id] ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}>{item.name}</span>
              <div className="flex flex-row gap-3">
                <Check
                  size={18}
                  className="text-green-500 hover:scale-[1.3] transition-all duration-200 cursor-pointer"
                  onClick={() => toggleDone(item.id)}
                />
                <X
                  size={18}
                  className="text-red-500 hover:scale-[1.3] transition-all duration-200 cursor-pointer"
                  onClick={() => deleteActivity(item.id)}
                />
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ToDo;
