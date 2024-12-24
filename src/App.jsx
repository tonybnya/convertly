import './App.css';
import Converter from './components/Converter';
import Footer from './components/Footer';

const App = () => {
  // https://api.frankfurter.dev/currencies
  // https://api.frankfurter.dev/latest?amount=1&from=USD&to=EUR
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center font-bold text-4xl'>
      <Converter />
      <Footer />
    </div>
  )
}

export default App;