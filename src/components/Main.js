import React, { Component } from 'react'
import Item from './Item'

export class Main extends Component {
  render() {
    return (
      <main className='ml-[20%] mt-[10vh] mr-[0.2%] flex flex-wrap justify-between'>
        {this.props.items.map(el => (
            <Item item = {el}/>
        ))}
      </main>
    )
  }
}

export default Main