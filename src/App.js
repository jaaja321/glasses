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
      curcat: 'Товары всех категорий',
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
    }
    this.catuse = this.catuse.bind(this)
    this.floor = this.floor.bind(this)
  }
  render() {
    return (
      <div className='text-blue-400'>
        <Header catuse={this.catuse} floor={this.floor} curcat={this.state.curcat}/>
        <Nav itemsCat={this.state.itemsCat} curcat={this.state.curcat} catuse={this.catuse} items={this.state.items} categories={this.state.categories}/>
        <Main items = {this.state.items}/>
      </div>
    )
  }

  catuse(cat) {
    this.setState({sex: ''})
    console.log(this.state.sex)
    this.setState({items: this.state.itemsCat})
    if (cat === ''){
      this.setState({itemsCat: this.state.itemsAll})
      this.setState({items: this.state.itemsAll})
      this.setState({curcat: `Товары всех категорий`})
    } else {
      this.setState({curcat: `Товары категории "${cat}"`})
      this.setState({items: [...this.state.itemsAll.filter(el => (
        el.category === cat
      ))]})
      this.setState({itemsCat: [...this.state.itemsAll.filter(el => (
        el.category === cat
      ))]})
    }
    this.floor(this.state.sex)
  }

  floor(sex){
    console.log(this.state.sex)
    if(sex === ''){
      return
    }
    if(sex === 'reset'){
      this.setState({items: this.state.itemsCat})
    } else {
      this.setState({items: this.state.itemsCat.filter(el => (
        el.sex === sex
      ))})
    }
    console.log(sex)
  }

}
export default App