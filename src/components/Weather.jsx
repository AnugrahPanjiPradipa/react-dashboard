import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = '0f8ed83e02676e3945d5c0367a7629b1';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
              setWeather({
                name: data.name,
                description: data.weather[0].description,
                temp: data.main.temp,
                icon: data.weather[0].icon,
              });
              setLoading(false);
            })
            .catch((err) => {
              console.error('Error Fetching Weather', err);
              setLoading(false);
            });
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation not supported by this browser.');
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-25 gap-3 md:gap-5 bg-white rounded-xl text-center p-4 shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full dark:border-gray-600 dark:bg-gray-800">
      {weather ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />

          <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
            <div className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200">{weather.name}</div>
            <div className="text-xs sm:text-sm text-gray-500 capitalize dark:text-gray-200">{weather.description}</div>
            <div className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-200">{weather.temp}°C</div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center text-center text-sm sm:text-base">{loading ? 'Loading...' : 'Unable to fetch location'}</div>
      )}
    </div>
  );
};

export default Weather;
