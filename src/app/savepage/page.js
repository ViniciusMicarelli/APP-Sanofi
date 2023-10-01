'use client'
import React, { useEffect, useState } from 'react';

function SavePage() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Function to load and display saved data
    const loadSavedData = () => {
      const savedDataJSON = localStorage.getItem('savedData');
      if (savedDataJSON) {
        setSavedData(JSON.parse(savedDataJSON));
      }
    };

    loadSavedData();
  }, []);

  const deleteData = (index) => {
    const newData = [...savedData];
    newData.splice(index, 1);
    localStorage.setItem('savedData', JSON.stringify(newData));
    setSavedData(newData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600">
      <h1 className="text-3xl font-semibold mb-8">Saved Data</h1>

      <table className="w-80 mb-8">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white p-2">Data</th>
            <th className="bg-blue-500 text-white p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {savedData.map((item, index) => (
            <tr key={index}>
              <td
                className="border p-2"
                dangerouslySetInnerHTML={{ __html: item }} // Render HTML tags
              ></td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white p-2 rounded cursor-pointer transition hover:bg-red-700"
                  onClick={() => deleteData(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/">
        <button className="bg-blue-500 text-white p-2 rounded cursor-pointer transition hover:bg-blue-700">
          Back to Index
        </button>
      </a>
    </div>
  );
}

export default SavePage;
