import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AppItems from './components/AppItems'
class App extends Component {
  constructor () {
    super();
  this.state = {
  cartItemsList : [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
   products : [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ], 
  value : "",
  quantity: 0
  }
}
handleChange = (e) => {
 this.setState({value: e.target.value})
}
handleQuantity = (e) => {
  this.setState({quantity: e.target.value})
  console.log(this.state.quantity)
}
handleClick = (e) => {
  e.preventDefault()
  var price = this.state.products.filter(product => {
    if (this.state.value === product.name) {
      return product.priceInCents
    }
  })
  var newItem = {
    id: this.state.cartItemsList.length +1,
    product: {
        id: 40, 
        name: this.state.value, 
        priceInCents: price[0].priceInCents
       }, 
      quantity: this.state.quantity, 
      }
      this.setState({
        cartItemsList: [...this.state.cartItemsList, newItem]
      })
}
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AppItems value={this.state.value} quantity={this.state.quantity} products = {this.state.products} handleClick={this.handleClick} handleChange = {this.handleChange} handleQuantity = {this.handleQuantity} />
        <CartFooter />
      </div>
    );
  }
}

export default App;