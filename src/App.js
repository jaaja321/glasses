import './main.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import { MdOutlineSportsSoccer } from 'react-icons/md'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      curcat: 'allC',
      curstate: 'allG',
      sex: '',
      itemsCat: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
        },
      ],
      items: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
        },
      ],
      itemsAll: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
        },
      ],
      curitems: [],
      search: ''
    }
    this.allCheck = this.allCheck.bind(this)
    this.search = this.search.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delitem = this.delitem.bind(this)
  }
  render() {
    return (
      <div className='text-blue-400'>
        <Header delitem={this.delitem} curitems={this.state.curitems} search={this.search} curstate={this.state.curstate} curcat={this.state.curcat}/>
        <Nav itemsCat={this.state.itemsCat} allCheck={this.allCheck} items={this.state.items} categories={this.state.categories}/>
        <Main curitems={this.state.curitems} addItem={this.addItem} items = {this.state.items} search={this.state.search}/>
      </div>
    )
  }

  allCheck(cat, state) {
    let result = this.state.itemsAll
    this.setState({curcat: cat})
    this.setState({curstate: state})
    if (cat === 'allC'){
      result = this.state.itemsAll
    } else {
      console.log(90)
      result = this.state.itemsAll.filter(el => (
        el.category === cat
      ))
    }
    if (state !== 'allG'){
      result = result.filter(el => (
        el.sex === state
      ))
    } else {
      result = result
    }
    this.setState({items: result})
    this.setState({itemsCat: result})
  }

  search(text){
    if (text){
      console.log(text)
      this.setState({items: this.state.itemsCat.filter(el => (
        el.desc.toLowerCase().indexOf(text) !== -1 || el.price.indexOf(text) !== -1
      ))})
      console.log(this.state.items.filter(el => (
        el.desc.toLowerCase().indexOf(text) !== -1
      )))
    } else {
      this.setState({items: this.state.itemsCat})
    }
    this.setState({search: text})
  }

  addItem(item){
    let arr = [...this.state.curitems, item]
    this.setState({curitems: [...this.state.curitems, item]})
    console.log(arr)
  }

  delitem(item){
    let arr = [...this.state.curitems.filter(el => (
      el.id !== item.id
    ))]
    this.setState({curitems: arr})
  }

}
export default App