import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
  const name = useSelector((state) => state.name.name);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Profil sahifasi</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          Foydalanuvchi ismi: <span className="font-medium">{name || "Noma'lum"}</span>
        </p>

        <Link
          to="/"
          className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default Profile;
