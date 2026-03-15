import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './Components/hooks/useCurrencyInfo'
import { InputBox } from './Components'

function App() {
  const [amount,setAmount]=useState(0)
  const[from,setFrom]=useState('usd')
  const[to,setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3))
  }
  const swap=() => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  
  return (
    <div
    className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat flex-wrap'
    style={{backgroundImage: `url(https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=600)`}}
    >
      <div
      className='w-full max-w-md mx-auto border border-gray-60 backdrop-blur-sm rounded-lg p-5 bg-white/30'
      >
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox 
            label="from"
            amount={amount}
            currencyOptions={options}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div
          className='w-full relative h-0.5'
          >
            <button 
            className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 border-2 border-white rounded-md bg-blue-600 text-white py-0.5 px-2'
            onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className='w-full mb-1'>
            <InputBox 
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            selectedCurrency={to}
            amountDisabled
            onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <button
          type='submit'
          className='w-full border-r-blue-800 text-white py-2 px-4 rounded-lg bg-blue-600'
          >
            convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
