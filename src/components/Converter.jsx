import logo from '../assets/logo.png';

const Converter = () => {
  return (
    <div className='rounded-lg shadow-2xl p-4 bg-white max-w-md mx-auto my-10 flex flex-col items-center justify-center'>
      <img src={logo} alt="app logo" className='max-lg:w-16 lg:w-24 mb-1' />
      <h1 className='max-lg:text-xl lg:text-2xl text-blue-600 font-weight-[400]'>Convertly</h1>
      <h4 className='max-lg:text-sm lg:text-xl text-gray-400 font-semibold mb-5'>Currency Converter App</h4>

      {/* <div>dropdowns</div> */}

      <div className='mt-4'>
        <label
          htmlFor="amount"
          className='block text-gray-700 text-sm font-medium mb-2'
        >
          Amount:
        </label>
        <input
          id="amount"
          type="number"
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500'
        />
      </div>

      <div className="flex justify-end mt-6">
        <button class="group relative h-12 w-36 overflow-hidden rounded-xl bg-blue-500 text-lg font-bold text-white">
          Convert
          <div class="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </div>
  )
}

export default Converter