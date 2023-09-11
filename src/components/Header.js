import React, { useState } from 'react'
import Cart from './Cart'
import { BiSearch } from 'react-icons/bi'
import { FaMale , FaFemale } from 'react-icons/fa'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {IoMdClose} from 'react-icons/io'

export default function Header(props) {

  let input = document.getElementById('input')
  let [cartshow, setCartshow] = useState(false)

  const search = () => {
    if (input.value === ''){
      input.select()
    }
  }
  
  let [text, setText] = useState('')
  let [empty, setEmpty] = useState(true)

  const type = (t) => {
    console.log(t)
    setText(t)
    props.search(t)
  }

  const head = () => {
    if (props.curcat === 'allC' && props.curstate === 'allG'){
      return 'Товары всех категорий'
    }
    if (props.curcat === 'allC' && props.curstate !== 'allG'){
      return `Все товары категории "${props.curstate}"`
    }
    if (props.curcat !== 'allC' && props.curstate === 'allG'){
      return `Все товары категории "${props.curcat}"`
    }
    return `Все товары категории "${props.curcat} ${props.curstate}"`
  }

  const cartpress = () => {
    setCartshow(!cartshow)
  }

  const list = (props) => {

  }

  return (
    <div className={`z-11`}>
      <div className={`z-20 w-[80%] fixed right-0 top-[-100%] h-auto bg-white ${cartshow && 'top-[10%]'} transition-all`}>
        <div onClick={() => cartpress()} className='absolute right-2 top-2 z-99 p-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose className='scale-[2]'/></div>
          <Cart curitems={props.curitems} delitem={props.delitem} className={`flex flex-wrap mx-12 bg-white`}/>
      </div>
    <div className='z-30 fixed right-0 top-0 w-[80%] h-[10%] bg-white flex justify-between border-b border-black'>
      <p onClick={() => cartpress()} className={`p-2 ml-4 my-auto font-bold flex border border-black rounded-lg hover:bg-gray-800 transition-all`}><RiShoppingBasket2Fill className='my-auto mr-2 mx-1 scale-[2]'/>Корзина</p>
      <p className='text-center m-auto font-bold'>{head()}</p>
        <div className='flex my-auto'>
          <input onChange={(e) => type(e.target.value)} value={text} className='rounded-lg border-2 my-auto border-gray-300 h-10' id='input'></input>
          <div onClick={() => search()}
          className='flex my-auto items-center mx-2 p-2 rounded-lg border border-black hover:bg-gray-800 transition-all'>
            <p className='my-auto font-bold'>Поиск</p>
            <div className='px-2'><BiSearch className='ml-2 scale-[2]'/></div>
        </div>
      </div>
    </div>
    </div>
  )
}
