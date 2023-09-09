import React, { useState } from 'react'
import Info from './Info'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {AiOutlineInfo} from 'react-icons/ai'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { PiBabyBold } from 'react-icons/pi'

export default function Item(props) {
    let [show, setShow] = useState(false)
    const info = () => {
        setShow(!show)
    }
  return (
    <div className='justify-between flex flex-col pb-2 m-2 w-[22%] border-2 border-gray rounded-t-[10px] hover:border-black transition-all'>
        <div>
          <p></p>
          <img onClick={() => info()} className='w-full h-40 rounded-t-[10px]' src={`https://jaaja321.github.io/fig/img/${props.item.img}`}></img>
          <p onClick={() => info()} className='mx-2'>{props.item.desc}</p>
        </div>
        <div className='mt-2 px-2 w-full inline-flex justify-between'>
        <div onClick={() => info()} className='p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><AiOutlineInfo className='scale-150'/></div>
            <p className='my-auto font-bold'>{props.item.price}$</p>
            <div className='flex'>
              <div className='p-4 ml-2 border border-black rounded-lg hover:bg-gray-800 transition-all'><RiShoppingBasket2Fill className='scale-150'/></div>
            </div>
        </div>
        {show ? <Info item={props.item} show={show} info={info}/> : null}
    </div>
  )
}
