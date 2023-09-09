import React from 'react'
import {IoMdClose} from 'react-icons/io'
import { RiShoppingBasket2Fill } from 'react-icons/ri'

export default function Info(props) {
  return (
    <div className='z-10 px-2 left-[5%] top-[5%] w-[90%] border border-black bg-white fixed'>
        <div className='py-2 flex'>
        <img className='w-[60%] h-[80vh]' src={`./img/${props.item.img}`}></img>
        <div className='flex flex-col justify-center'>
          <ul className='text-center h-[100%]'>
            <li className='font-bold'>{props.item.desc}</li>
            <li>Категория: {props.item.sex} | {props.item.category}</li>
          </ul>
          <div className='flex justify-center p-4 ml-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><RiShoppingBasket2Fill className='scale-150'/><span className='mx-2 font-bold'>Добавить в корзину</span></div>
        </div>
        <div className='h-[100%] p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose onClick={() => props.info()} className='scale-[2]'/></div>
        </div>
    </div>
  )
}
