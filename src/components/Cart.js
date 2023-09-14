import React, { Component } from 'react'
import CartItem from './CartItem'

export class Cart extends Component {
  render() {
    return(
      <div className='flex justify-center border-b border-b-black'>
        {this.props.curitems.length > 0 ? 
        <div className='text-center'>
            <div className='grid grid-cols-2 ml-[10px] mr-[54px]'>
              {this.props.curitems.map(el => (
                <CartItem item={el} delitem={this.props.delitem}/>
              ))}
            </div>
            <p className='my-2 font-bold'>Если определились с покупкой,можете звонить и заказывать</p>
            <p className='mb-2 font-bold'>+380123918215</p>
          </div> : <div className='h-[80px] flex'><p className='font-bold my-auto'>Вы не выбрали товар</p></div>}
      </div>
    )
  }
}

export default Cart