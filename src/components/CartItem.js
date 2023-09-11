import React from 'react'
import {IoMdClose} from 'react-icons/io'

function CartItem(props) {
  return (
    <div className='flex justify-center border border-gray rounded-[10px] hover:border-black transition-all'>
        <img className='my-auto h-20 rounded-l-[10px]' src={`https://jaaja321.github.io/fig/img/${props.item.img}`}></img>
        <div className='m-auto flex flex-col text-center'>
            <p>{props.item.title}</p>
            <p className='mx-auto'>{props.item.price}$</p>
        </div>
        <div className='my-auto'>
            <div onClick={() => props.delitem(props.item)} className='m-2 p-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose /></div>
        </div>
    </div>
  )
}

export default CartItem