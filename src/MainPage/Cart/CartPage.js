import Cart from './Cart'
import React from 'react'
import CartElement from './CartElement';
class CartPage extends React.Component{
    state={
Clothes:Cart.List
    }
    render(){
        return(
        <div className="Storage">
      {this.state.Clothes ? (<div className="row">
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
        
             </div>
        )}
}
export default CartPage;