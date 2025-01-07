import { useEffect, useState } from 'react';
import Header from './Header';
import Currency from './Currency';

const Converter = () => {
  // Currencies API URL: https://api.frankfurter.app/currencies
  // Conversion API URL: https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://api.frankfurter.app/currencies');
      const data = await response.json();
      setCurrencies(Object.keys(data));
      // setCurrencies(data);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  }

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  const converter = async () => {
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=USD&to=EUR`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  }

  return (
    <div className='rounded-lg shadow-2xl p-4 bg-white mx-auto my-4 flex flex-col items-center justify-center'>
      <Header />

      {/* Currencies Dropdowns */}
      <Currency currencies={currencies} title='From:' />
      {/* button to swap currencies */}
      <Currency currencies={currencies} title='To:' />

      <div className='mt-4'>
        <label
          htmlFor="amount"
          className='block text-gray-700 text-sm font-medium mb-2'
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500'
        />
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={converter} className="group relative h-12 w-36 overflow-hidden rounded-xl bg-blue-500 text-lg font-bold text-white">
          Convert
          <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>

      <div className='py-6 text-red-500 text-3xl'>
        1 USD = 0.91 EUR
      </div>
    </div>
  )
}

export default Converter