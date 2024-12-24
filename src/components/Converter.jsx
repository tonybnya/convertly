import logo from '../assets/logo.png';

const Converter = () => {
  return (
    <div className='rounded-lg shadow-2xl p-4 bg-white max-w-xl mx-auto my-10 flex flex-col items-center justify-center'>
      <img src={logo} alt="app logo" className='max-lg:w-16 lg:w-24 mb-1' />
      <h1 className='max-lg:text-xl lg:text-2xl text-blue-600 font-weight-[400]'>Convertly</h1>
      <h4 className='max-lg:text-xl lg:text-2xl text-gray-700 font-semibold mb-5'>Currency Converter App</h4>

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
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500'
        />
      </div>
    </div>
  )
}

export default Converter