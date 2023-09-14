import React from 'react'
import {IoMdClose} from 'react-icons/io'
import { RiShoppingBasket2Fill } from 'react-icons/ri'

export default function Info(props) {
  return (
    <div className='px-2 left-0 top-0 h-full w-full border border-black bg-white fixed'>
        <div className='py-2 flex'>
        <img className='w-[60%] h-[80vh]' src={`https://jaaja321.github.io/fig/img/${props.item.img}`}></img>
        <div className='flex flex-col justify-center'>
          <ul className='text-center h-[100%] mx-[10%]'>
            <li className='font-bold'>{props.item.desc}</li>
            <li>Категория: {props.item.sex} | {props.item.category}</li>
          </ul>
          <p className='font-bold mx-auto'>Цена: {props.item.price}$</p>
          <p className='flex justify-center p-4 ml-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><RiShoppingBasket2Fill className='scale-150'/><span className='mx-2 font-bold'>Добавить в корзину</span></p>
        </div>
        <div className='absolute right-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose onClick={() => props.info()} className='scale-[2]'/></div>
        </div>
    </div>
  )
}
