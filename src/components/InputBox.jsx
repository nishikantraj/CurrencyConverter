import React from 'react'
import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency= "usd",
    amountDisable= false,
    currencyDisable= false,
    className="",

}) {
    const amountInputId = useId()
  return (
    <div className={`p-3 rounded-lg text-sm bg-white flex ${className}`}>
        <div className='w-1/2'>
            <label
            htmlFor={amountInputId}
            className='text-black/40 mb-5 inline-block'>
            {label}
            </label>
            
            
            <input 
            id={amountInputId}
            className='outline-none w-full py-2 rounded-sm'
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />


        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-5 w-full'>Currency Type</p>

            <select
                value={selectCurrency}
                onChange={(e)=>(onCurrencyChange && onCurrencyChange(e.target.value))}
                disabled={currencyDisable}
                className='rounded-md px-1 py-2'
            >
                {
                    currencyOption.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                            </option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox