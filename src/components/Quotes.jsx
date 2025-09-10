import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random?maxLength=80')
      .then((res) => res.json())
      .then((data) => {
        setQuotes({
          content: data.content,
          author: data.author,
        });
      })
      .catch((err) => console.error('Error Fetching Quote', err));
  }, []);

  if (!quotes) {
    return (
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex items-center justify-center h-110 dark:bg-gray-800 dark:border-gray-600">
        <p className="text-gray-500 dark:text-gray-200 italic">Loading quote...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border p-4 border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-center items-center h-full dark:bg-gray-800 dark:border-gray-600">
      <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-200">✨ Quotes of The Day</p>
      <blockquote className="text-lg md:text-xl italic text-gray-700 text-center leading-relaxed dark:text-gray-200">“{quotes.content}”</blockquote>
      <p className="mt-4 text-sm md:text-base font-medium text-gray-900 dark:text-gray-200">— {quotes.author}</p>
    </div>
  );
};

export default Quotes;
