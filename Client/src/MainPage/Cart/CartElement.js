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
        <div className = "Wrapper-content-cart-element">
    <h2>{this.props.name}</h2>
    <h3>Rozmiar: {this.props.size}</h3>
    <h3>Logo na plecach: {this.props.Logo}</h3>
    <h3>Cena: {this.props.cost/100} zł</h3>
        </div>
    <button onClick={this.RemoveFromCart} className = "Add-to-Cart-cart">usuń</button>
</div> )
    }
}

export default CartElement;