import React, { useState } from 'react';

const CreateTodoGroupModal = ({ showModal, closeModal, createTodoGroup }) => {
  const [todoGroupName, setTodoGroupName] = useState('');

  const handleInputChange = (e) => {
    setTodoGroupName(e.target.value);
  };

  const handleSave = () => {
    if (!todoGroupName.length) return;
    createTodoGroup(todoGroupName);
    closeModal();
  };

  return (
    <>
        {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
                <button className="close-btn absolute top-1 right-2 cursor-pointer text-gray-500 text-2xl" onClick={closeModal}>
                &times;
                </button>
                <h2 className="text-2xl mb-4">Enter Todo Group Name</h2>
                <form>
                <label className="block mb-4">
                    Todo Group Name:
                    <input
                    type="text"
                    value={todoGroupName}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </label>
                <button
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save
                </button>
                </form>
            </div>
            </div>
        )}
    </>
  );
};

export default CreateTodoGroupModal;
