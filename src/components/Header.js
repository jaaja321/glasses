import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaMale , FaFemale } from 'react-icons/fa'

export default function Header(props) {

  let text = ''
  let input = document.getElementById('input')

  let [male ,setMale] = useState(false)
  let [female ,setFemale] = useState(false)
  let [sex1 ,setSex] = useState('')

  const search = () => {
    if (input.value === ''){
      input.select()
    }
  }

  const floor = (sex) => {
    if (sex1 !== sex){
      props.floor(sex)
      setSex(sex)
    }
    if (sex1 === sex){
      props.floor('reset')
      setSex('reset')
    }
  }

  return (
    <div>
    <div className='z-10 fixed right-0 top-0 w-[80%] h-[10vh] bg-white flex justify-between border-b border-black'>
      <div className='ml-1 my-auto flex'>
        <div onClick={() => floor('Мужские')} className={`border border-black rounded-lg p-4 mx-1 ${sex1 === 'Мужские' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><FaMale className='scale-[2]'/></div>
        <div onClick={() => floor('Женские')} className={`border border-black rounded-lg p-4 mx-1 ${sex1 === 'Женские' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><FaFemale className='scale-[2]'/></div>
      </div>
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
