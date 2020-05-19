import React from 'react';
import './TopScrollBar.css'
import drawing from './drawing.svg'
import history from '../BrowserHistory'

class TopScrollbar extends React.Component{
goToCart(){
history.push('/cart')
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
         <a href="#TOP"> <h1 className="Title">CPT</h1></a>  
            </div>
            <div className="End">
           <button onClick ={this.goToCart}><img className="Cart" src={drawing}></img></button> 
            </div>
           
        </div>
        );
    }
}
export default TopScrollbar 