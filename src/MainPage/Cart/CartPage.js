import Cart from './Cart'
import React from 'react'
import CartElement from './CartElement';
import './CartPage.css'

class CartPage extends React.Component{
    state ={
        Clothes : JSON.parse(window.localStorage.getItem("Cart"))
    }
    GenerateTotal(){
        let sum =0;
        JSON.parse(window.localStorage.getItem("Cart")).forEach(element => {
            sum += element.Cost;
        });
        return sum;
    }
    render(){
        return(
        <div className="Storage-cart">
      {this.state.Clothes ? (<div className="row-cart">
                <div className="Wrap-List"> {this.state.Clothes.map(List=>(<CartElement
                    name = {List.name}
                    cost = {List.Cost}
                    url = {List.url}
                    size = {List.size}
                    id = {List.id}
               />
               ))}</div>
              
       
        </div>
    ):(<h1>Chwilowo w koszyku nie ma produktów </h1>)
}
<h1 className = "Total-cart">W sumie: {this.GenerateTotal()} zł</h1>
 <button className ="Add-To-Cart-Cart">Checkout</button>       
             </div>
        )}
}
export default CartPage;