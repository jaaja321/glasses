import React, { Component } from 'react'
import Category from './Category'
import {HiMenu} from 'react-icons/hi'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiOpenBook, GiThunderSkull } from 'react-icons/gi'
import { PiBabyBold } from 'react-icons/pi'
import { HiSun } from 'react-icons/hi2'
import { FaMale, FaFemale } from 'react-icons/fa'

export class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      curcat: 'allC',
      curstate: 'allG',
    }
    this.stateCheck = this.stateCheck.bind(this)
    this.catCheck = this.catCheck.bind(this)
  }

  stateCheck(state){
    console.log(state,this.state.curstate)
    if (state === this.state.curstate){
      this.setState({curstate: 'allG'})
      this.allCheck(this.state.curcat, 'allG')
      return
    } else {
      this.setState({curstate: state})
    }
    this.allCheck(this.state.curcat, state)
  }

  catCheck(cat){
    console.log(cat,this.state.curstate)
    if (cat === this.state.curcat){
      this.setState({curcat: "allC"})
      this.allCheck("allC", this.state.curstate)
      return
    } else {
      this.setState({curcat: cat})
    }
    this.allCheck(cat, this.state.curstate)
  }

  allCheck(cat, state){
    this.setState({curstate: state})
    this.setState({curcat: cat})
    console.log(cat, state)
    this.props.allCheck(cat, state)
  }

  render() {
    return (
      <nav className='fixed flex flex-col left-0 top-0 h-full w-[20%] bg-white border-r border-black'>
        <div className='flex mt-2 mb-[-4px]'>
            <div onClick={() => this.allCheck('allC', 'allG')} className='mx-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><HiMenu className='scale-[2]'/></div>
            <p className='my-auto font-bold'>LuxOchki</p>
        </div>
        <div className='flex justify-around mt-4'>
          <div onClick={() => this.stateCheck('Мужские')} className={`w-[25%] p-4 mx-2 border border-black rounded-lg ${this.state.curstate === 'Мужские' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><FaMale className='scale-[2] mx-auto'/></div>
          <div onClick={() => this.stateCheck('Женские')} className={`w-[25%] p-4 mx-2 border border-black rounded-lg ${this.state.curstate === 'Женские' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><FaFemale className='scale-[2] mx-auto'/></div>
        </div>
        <div className='m-2'>
          <ul className='flex flex-col w-[100%] rounded-lg'>
            <li onClick={() => this.catCheck('Спортивные')} className={`my-1 pl-4 py-4 flex font-bold border border-black rounded-lg ${this.state.curcat === 'Спортивные' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><MdOutlineSportsSoccer className='mr-3 scale-[2] my-auto'/>Спорт</li>
            <li onClick={() => this.catCheck('Для чтения')} className={`my-1 pl-4 py-4 flex font-bold border border-black rounded-lg ${this.state.curcat === 'Для чтения' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><GiOpenBook className='mr-3 scale-[2] my-auto'/>Чтение</li>
            <li onClick={() => this.catCheck('Детские')} className={`my-1 pl-4 py-4 flex font-bold border border-black rounded-lg ${this.state.curcat === 'Детские' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><PiBabyBold className='mr-3 scale-[2] my-auto'/>Детские</li>
            <li onClick={() => this.catCheck('Солнцезащитные')} className={`my-1 pl-4 py-4 flex font-bold border border-black rounded-lg ${this.state.curcat === 'Солнцезащитные' && 'bg-gray-700'} hover:bg-gray-800 transition-all`}><HiSun className='mr-3 scale-[2] my-auto'/>Cолнцезащитные</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav