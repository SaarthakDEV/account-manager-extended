import React from 'react'

const BottomBar = () => {

  return (
    <div className="h-16 flex shadow-xl shadow-black">
        <div className="flex-1 justify-center items-center flex flex-col">
            <span>Credit</span>
            <span>$11</span>
        </div>
        <div className="flex-1 justify-center items-center flex flex-col">
            <span>Debit</span>
            <span>$1</span>
        </div>
        <div className="flex-1 justify-center items-center flex flex-col bg-primary text-white">
            <span>Balance</span>
            <span>$10</span>
        </div>
    </div>
  )
}

export default BottomBar