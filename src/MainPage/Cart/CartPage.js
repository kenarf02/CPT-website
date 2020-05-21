import Cart from './Cart'
import React from 'react'
import CartElement from './CartElement';
import './CartPage.css'


class CartPage extends React.Component{
    state={
Clothes:Cart.List
    }
    render(){
        return(
        <div className="Storage-cart">
      {this.state.Clothes ? (<div className="row-cart">
                <div className="Wrap-List"> {Cart.List.map(List=>(<CartElement
                    name = {List.name}
                    cost = {List.Cost}
                    url = {List.url}
                    size = {List.size}
                    
               />
               ))}</div>
              
       
        </div>
    ):(<h1>Ładowanie Produktów...</h1>)
}
<h1 className = "Total-cart">W sumie: {/* total */} zł</h1>
 <button className ="Add-To-Cart-Cart">Checkout</button>       
             </div>
        )}
}
export default CartPage;