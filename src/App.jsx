import { useState } from 'react'
import InputBox from '../src/components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
      <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover'
        style={{backgroundImage:`url("https://images.unsplash.com/photo-1529425518758-626decf151e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3klMjBjaXR5fGVufDB8fDB8fHww")`}}
      >

        <div className='w-full'>
          <div className='w-full max-w-lg mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form 
              onSubmit={(e)=>{
                e.preventDefault();
                convert()
              }}
            >
              <div className='w-full mb-1 '>
                  <InputBox 
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency)=>{
                    setFrom(currency)
                    setAmount(amount)
                      }
                    }
                  selectCurrency={from} 
                  onAmountChange={(amount)=>setAmount(amount)}
                  />
              </div>

              <div className='relative w-full h-0.5 mt-2'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 
                              -translate-y-1/2 border-2 rounded-md
                              bg-blue-600 text-white px-2 py-0.5
                  '
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              <div className='w-full mt-1 mb-4'>
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectCurrency={to} 
                  amountDisable
                />
              </div>

              <button type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

            </form>

          </div>
          
        </div>

      </div>
  )
}

export default App
