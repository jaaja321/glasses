import React, { useState } from 'react'
import Info from './Info'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineInfo} from 'react-icons/ai'

function CartItem(props) {

    let [show, setShow] = useState(false)

    const info = () => {
        setShow(!show)
    }
    
  return (
    <div className='flex justify-center border border-gray rounded-[10px] hover:border-black transition-all'>
        {show ? <Info item={props.item} show={show} info={info}/> : null}
        <img className='my-auto h-20 rounded-l-[10px]' src={`https://jaaja321.github.io/fig/img/${props.item.img}`}></img>
        <div className='m-auto flex flex-col text-center'>
            <p>{props.item.title}</p>
            <p className='mx-auto'>{props.item.price}$</p>
        </div>
        <div className='my-auto'>
            <div onClick={() => props.delitem(props.item)} className='m-1 p-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose /></div>
            <div onClick={() => info()} className='m-1 p-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><AiOutlineInfo /></div>
        </div>
    </div>
  )
}

export default CartItem