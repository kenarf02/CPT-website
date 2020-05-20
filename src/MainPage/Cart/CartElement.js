import React from 'react';
import './CartElement.css'
class CartElement extends React.Component{

    render(){
return(<div className = "Cart-element">
   <img src = {this.props.url} className="cart-img"></img>
    <h1>{this.props.name}</h1>
    <h2 className = "cost">{this.props.cost}</h2>
</div>)
    }
}

export default CartElement;