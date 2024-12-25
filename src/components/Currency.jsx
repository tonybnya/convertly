import React from 'react';

const Currency = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorites,
  title = ''
}) => {
  return (
    <div>
      <label
        className='block text-gray-700 font-semibold mb-1'
        htmlFor={title}
      >
        {title}
      </label>
      <div>
        <select className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500'>
          {currencies.map((currency) => {
            return (
              <option
                key={currency}
                value={currency}
              >
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  )
}

export default Currency;