import React, { Component } from 'react'
import Category from './Category'
import {HiMenu} from 'react-icons/hi'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { PiBabyBold } from 'react-icons/pi'
import { HiSun } from 'react-icons/hi2'

let curcat = 'qwe'

export class Nav extends Component {
  catuse(cat){
    curcat = cat
    this.props.catuse(cat)
    console.log(cat)
  }
  render() {
    return (
      <nav className='fixed flex flex-col left-0 top-0 h-full w-[20%] bg-white border-r border-black'>
        <div className='flex mt-2 mb-[-4px]'>
            <div onClick={() => this.props.catuse('')} className='mx-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><HiMenu className='scale-[2]'/></div>
            <p className='my-auto font-bold'>LuxOchki</p>
        </div>
        <div className='m-2'>
          <ul className='flex flex-col w-[100%] rounded-lg'>
            <li onClick={() => this.catuse('Спортивные')} className='my-1 pl-4 py-4 flex font-bold border border-black rounded-lg hover:bg-gray-800 transition-all'><MdOutlineSportsSoccer className='mr-3 scale-[2] my-auto'/>Спорт</li>
            <li onClick={() => this.catuse('Для чтения')} className='my-1 pl-4 py-4 flex font-bold border border-black rounded-lg hover:bg-gray-800 transition-all'><GiOpenBook className='mr-3 scale-[2] my-auto'/>Чтение</li>
            <li onClick={() => this.catuse('Детские')} className='my-1 pl-4 py-4 flex font-bold border border-black rounded-lg hover:bg-gray-800 transition-all'><PiBabyBold className='mr-3 scale-[2] my-auto'/>Детские</li>
            <li onClick={() => this.catuse('Солнцезащитные')} className={`my-1 pl-4 py-4 flex font-bold border border-black rounded-lg hover:bg-gray-800 transition-all`}><HiSun className='mr-3 scale-[2] my-auto'/>Cолнцезащитные</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav