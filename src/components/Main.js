import React, { Component } from 'react'
import Item from './Item'

export class Main extends Component {
  render() {
    return (
      <main id='items' className='ml-[21%] mt-[10vh] mr-[1%] grid grid-cols-3 gap-4 justify-between'>
        {this.props.items.map(el => (
            <Item curitems={this.props.curitems} item = {el} search={this.props.search} addItem={this.props.addItem}/>
        ))}
      </main>
    )
  }
}

export default Main