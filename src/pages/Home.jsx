import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../features/name/nameSlice';
import { Link } from 'react-router-dom';

function Home() {
  const [input, setInput] = useState('');
  const name = useSelector((state) => state.name.name);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(setName(input));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Ismingizni kiriting</h1>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ismingiz"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Saqlash
        </button>

        {name && (
          <p className="mt-4 text-lg text-gray-700">Salom, <span className="font-medium">{name}</span> 👋</p>
        )}

        <Link
          to="/profile"
          className="inline-block mt-6 text-blue-600 hover:underline transition duration-150"
        >
          Profil sahifasiga o'tish
        </Link>
      </div>
    </div>
  );
}

export default Home;
