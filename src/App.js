import './main.css';
import './style.css';
import { list,col } from './list.js';
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import translate from "translate"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lang: 'ru',
      allcat: [
      'Эксклюзивные очки',
      'Спортивные очки',
      'Мужские поляризованные очки',
      'Женские поляризованные очки',
      'Детские солнцезащитные очки',
      'Чехлы и футляры для очков',
      'Женские солнцезащитные очки',
      'Солнцезащитные очки',
      'Очки для водителей ',
      'Мужские солнцезащитные очки',
      'Детские поляризованные очки',
      'Компьютерные очки',
      'Шнурки и цепочки для очков',
      'Имиджевые очки',
      'Детские и подростковые компьютерные защитные очки',
      'Футляры для диоптрических очков',
      'Очки для зрения',
],
      open: false,
      fil: [],
      curcat: 'allC',
      curstate: 'allG',
      curcol: '',
      sex: '',
      itemsCat: list,
      items: list,
      itemsAll: list,
      curitems: [],
      colors: col,
      search: '',
      y: false
    }
    this.allCheck = this.allCheck.bind(this)
    this.search = this.search.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delitem = this.delitem.bind(this)
    this.setOpen = this.setOpen.bind(this)
    this.setCat = this.setCat.bind(this)

  }
  render() {
    return (
      <div className='text-red-400'>
        <Header setOpen={this.setOpen} delitem={this.delitem} open={this.state.open} curitems={this.state.curitems} search={this.search} curstate={this.state.curstate} curcat={this.state.curcat} addItem={this.addItem}/>
        <Nav fil={this.state.fil} allcat={this.state.allcat} colors={this.state.colors} allCheck={this.allCheck} curcol={this.state.curcol} colCheck={this.colCheck} setOpen={this.setOpen} open={this.state.open} itemsCat={this.state.itemsCat} items={this.state.items} categories={this.state.categories}/>
        <Main allCheck={this.allCheck} y={this.state.y} setCat={this.setCat} allcat={this.state.allcat} colors={this.state.colors} curcol={this.state.curcol} curitems={this.state.curitems} curcat={this.state.curcat} open={this.state.open} addItem={this.addItem} items = {this.state.items} search={this.state.search}/>
      </div>
    )
  }

  setCat(cat){
    this.setState({curcat: cat})
    console.log(cat)
    this.allCheck(cat, this.state.curstate, this.state.curcol)
  }

  allCheck(cat, state, col) {
    this.setState({y: true})
    let result = this.state.itemsAll
    this.setState({curcat: cat})
    this.setState({curstate: state})
    if (cat === 'allC'){
      result = this.state.itemsAll
    } else {
      result = this.state.itemsAll.filter(el => (
        el.cat === cat
      ))
      this.state.itemsAll.forEach(el => (console.log(el.cat)))
      console.log(result)
    }


    this.setState({items: result})
    this.setState({itemsCat: result})
  }

  search(text){
    if (text){
      console.log(text)
      this.setState({items: this.state.itemsCat.filter(el => (
        el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 || el.id.indexOf(text) !== -1
      ))})
      console.log(this.state.items.filter(el => (
        el.title.toLowerCase().indexOf(text) !== -1
      )))
    } else {
      this.setState({items: this.state.itemsCat})
    }
    this.setState({search: text})
  }

  addItem(item){
    let isIn = false
    let arr = [...this.state.curitems, item]
    this.setState({curitems: [...this.state.curitems, item]})
    this.state.curitems.forEach(el => {
      if (el === item){
        isIn = true
      }
    })
    if (isIn) {
      this.setState({curitems: this.state.curitems.filter(el => (
        el !== item
      ))})
    }
  }

  delitem(item){
    item.selected = false
    this.state.curitems.forEach(el => {
      if (el === item){
        item.selected = false
      }
    })
    let arr = [...this.state.curitems.filter(el => (
      el !== item
    ))]
    this.setState({curitems: arr})
  }

  setOpen(){
    this.setState({open: !this.state.open})
  }
}
export default App