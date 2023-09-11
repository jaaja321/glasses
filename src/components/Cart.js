import React, { Component } from 'react'
import CartItem from './CartItem'

export class Cart extends Component {
  render() {
    console.log(this.props.curitems)
    return (
      <div className='grid grid-cols-2 ml-[10px] mr-[54px]'>
        {this.props.curitems.map(el => (
          <CartItem item={el} delitem={this.props.delitem}/>
        ))}
      </div>
    )
  }
}

export default Cart