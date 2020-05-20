import React from 'react';
import './TopScrollBar.css'
import drawing from './drawing.svg'
import history from '../BrowserHistory'

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
            <a href >Sklep</a>
            <a href>LookBook S/S 2020</a>
            <a href>Kontakt</a>
            <a href>O nas</a> 
            </div>
            <div className="Middle"> 
            <button onClick={this.goToMain} className ="cart-button"> <h1 className="Title">CPT</h1></button>
            </div>
            <div className="End">
           <button onClick ={this.goToCart} className ="cart-button"><img className="Cart" src={drawing}></img></button> 
            </div>
           
        </div>
        );
    }
}
export default TopScrollbar 