import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaMale , FaFemale } from 'react-icons/fa'

export default function Header(props) {

  let text = ''
  let input = document.getElementById('input')

  const search = () => {
    if (input.value === ''){
      input.select()
    }
  }

  return (
    <div>
    <div className='z-10 fixed right-0 top-0 w-[80%] h-[10vh] bg-white flex justify-between border-b border-black'>
      <p className='m-auto font-bold'>{props.curcat}</p>
        <div className='my-2 flex'>
          <input className='rounded-lg border-2 my-auto border-gray-300 h-10' id='input'></input>
          <div onClick={() => search()} onChange={(e) => text = e.target.value}
          className='flex my-auto items-center mx-2 p-2 rounded-lg border border-black hover:bg-gray-800 transition-all'>
            <p className='my-auto font-bold'>Поиск</p>
            <div className='px-2'><BiSearch className='ml-2 scale-[2]'/></div>
        </div>
      </div>
    </div>
    </div>
  )
}
