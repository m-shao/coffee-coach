import { useState } from 'react';

const SetupPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired action with the input value
    console.log(inputValue);
    // Reset the input value
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label htmlFor="inputField" className="block mb-2 font-bold">Input Field</label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded"
            placeholder="Enter value"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetupPage;
