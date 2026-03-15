import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false
}) {
  return (
    <div
    className='bg-slate-100 p-3 rounded-lg text-sm flex justify-evenly items-center'
    >
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            type="number" 
            className='w-full py-1.5 outline-none bg-transparent'
            placeholder={`${selectedCurrency}`}
            value={amount}
            disabled={amountDisabled}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>

        <div className='w-1/5 flex flex-wrap flex-col'>
            <label className='text-black/40 mb-2 inline-block'>Currency Type</label>
            <select 
            className='rounded-lg p-1 outline-none cursor-pointer bg-gray-300'
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            >
                {currencyOptions.map((Currency) =>(
                    <option key={Currency} value={Currency}>
                        {Currency}
                    </option>
            ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
