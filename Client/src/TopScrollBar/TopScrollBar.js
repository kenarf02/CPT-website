import React from 'react';
import './TopScrollBar.css'
import drawing from './drawing.svg'
import history from '../BrowserHistory'
import BurgerMenu from './BurgerMenu';

class TopScrollbar extends React.Component{
goToCart(){
history.push('/cart')
}
goToMain(){
    history.push('/')
}
    render(){
        return(
        <div className="top-scrollbar">
            <div className= "Menu">
           <BurgerMenu></BurgerMenu>
            </div>
            <div className="Middle"> 
            <button onClick={this.goToMain} className ="cart-button"> <h1 className="Title-scrollbar">CPT</h1></button>
            </div>
            <div className="End">
           <button onClick ={this.goToCart} className ="cart-button"><img className="Cart" src={drawing}></img></button> 
            </div>
         
        </div>
        );
    }
}
export default TopScrollbar 