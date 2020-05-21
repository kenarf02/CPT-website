import React from 'react';
import './CartElement.css'
import Cart from './Cart';
import App from '../../App';
import ReactDOM from 'react-dom'
import history from '../../BrowserHistory'
class CartElement extends React.Component{

    RemoveFromCart =()=>{
        Cart.List.splice(this.props.id,1)
        console.log(Cart.List)
      var cart =  JSON.parse( window.localStorage.getItem("Cart"));
        for(var x = 0;x<cart.length;x++){
            if(cart[x].id == this.props.id){
                cart.splice(x,1)
            }
        }
      window.localStorage.setItem("Cart",JSON.stringify(cart))
        history.push('/cart')
        window.location.reload(false);
    }
    render(){
return(<div className = "Cart-element">
   <img src = {this.props.url} className="cart-img"></img>
    <h1 className = "name-cart">{this.props.name}</h1>
    <h2 className = "cost-cart">{this.props.cost}</h2>
    <button onClick={this.RemoveFromCart} className = "Remove-Cart">usuń</button>
</div>)
    }
}

export default CartElement;