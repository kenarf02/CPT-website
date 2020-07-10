import Cart from './Cart'
import React from 'react'
import CartElement from './CartElement';
import './CartPage.css'
import history from '../../BrowserHistory'
import Checkout from '../Checkout/Checkout';

class CartPage extends React.Component{
    state ={
        Clothes : JSON.parse(window.localStorage.getItem("Cart"))
    }
    GoToCheckout(){
        if(JSON.parse(window.localStorage.getItem("Cart")).length > 0){
        history.push('checkout')
        }
    }
    GenerateTotal(){
        let sum =0;
        JSON.parse(window.localStorage.getItem("Cart")).forEach(element => {
            sum += element.Cost;
        });
        return sum;
    }
     payments(){
         const param = JSON.parse(window.localStorage.getItem("Cart"));
        if(param.length >0){
            return(<Checkout></Checkout>)
        }else{
            return null;
        }
    }
    render(){
        return(
        <div className="Storage-cart">
            <div class="My-cart">
            <h1 className="HCart">Mój koszyk</h1>

      {this.state.Clothes.length >0 ? (<div className="row-cart">
                <div className="Wrap-List-checkout"> {this.state.Clothes.map(List=>(<CartElement
                    name = {List.name}
                    cost = {List.Cost}
                    url = {List.url}
                    size = {List.size}
                    id = {List.id}
                    Logo = {List.TonBack}
               />
               ))}</div>
              
       
        </div>
    ):(<h1 className = "Empty-cart-text">Koszyk jest pusty :(</h1>)
}
</div>

<div className= "Checkout-side">
<h1 className="HCart">Podsumowanie</h1>
<div className = "Checkout-cart">
<h1 className = "Total-cart">W sumie: {this.GenerateTotal()/100} zł</h1>
<this.payments></this.payments>
 </div>
 </div>
             </div>
        )}
}
export default CartPage;