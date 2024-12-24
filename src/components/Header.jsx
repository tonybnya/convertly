import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={logo} alt="app logo" className='max-lg:w-16 lg:w-24 mb-4 saturate-200 animate-pulse drop-shadow-other brightness-50' />
      <button className='bg-black shadow-lg shadow-yellow-500/50 text-yellow-500 font-bold py-2 px-4 rounded-xl'>Convertly</button>
      <h4 className='max-lg:text-sm lg:text-xl text-gray-400 font-semibold mb-5'>Currency Converter App</h4>
    </div>
  )
}

export default Header