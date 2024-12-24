import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={logo} alt="app logo" className='max-lg:w-16 lg:w-24 mb-1' />
      <h1 className='max-lg:text-xl lg:text-2xl text-blue-600 font-weight-[400]'>Convertly</h1>
      <h4 className='max-lg:text-sm lg:text-xl text-gray-400 font-semibold mb-5'>Currency Converter App</h4>
    </div>
  )
}

export default Header