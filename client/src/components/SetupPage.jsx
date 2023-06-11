import { useState, useEffect } from 'react';

const SetupPage = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue)
    }, [inputValue]);

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
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4 w-full">
          <label htmlFor="inputField" className="block mb-2 font-bold">🙌🏼 Tell us about your meeting today 🙌🏼:</label>
          <textarea
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 text-black rounded"
            placeholder="Speaker, Interviwee, Topic, Goals, Context, Relationship, Level of Professionalism..."
            rows={4}
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-neutral-500 rounded hover:bg-neutral-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetupPage;
