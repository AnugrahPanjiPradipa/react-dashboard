import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FormActivity = ({ addNewActivity, setOpenMenu }) => {
  const [addActivity, setAddActivity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!addActivity) return;

    const id = crypto.randomUUID();
    const newActivity = { id, name: addActivity };

    addNewActivity(newActivity);
    setAddActivity('');
    setOpenMenu(false);
  }

  return (
    <form
      className="flex flex-row justify-center py-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Your Activity"
        value={addActivity}
        onChange={(e) => setAddActivity(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:placeholder-gray-200"
      />
      <button
        type="submit"
        className="mx-3 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center justify-center"
      >
        <Plus size={18} />
      </button>
      <button
        type="button"
        onClick={() => {
          setOpenMenu(false);
        }}
        className="p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </form>
  );
};

export default FormActivity;
