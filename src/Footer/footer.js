import React from 'react';
import './footer.css'
import instagram from './instagram.svg'
import facebook from './Facebook.svg'

class Footer extends React.Component{

    RedirectToInsta = () =>{
        window.open('https://www.instagram.com/cpt_brand/','_blank')
    }
    RedirectToFb = () =>{
        window.open('https://www.facebook.com/CPT-114061960134782/','_blank')
    }
    render(){
        return(
        <div className ="Footer">
            <div className = "List-part-footer">
                <button  className ="Footer-Button-list">Zwroty</button>
                <button  className ="Footer-Button-list">Polityka prywatności</button>
            </div>
            <div className = "Button-part-footer">
                <h2 className= "Footer-Title">CPT Brand</h2>
                <div className= "Wrapper-footer-button">
                <button className ="Footer-Button" onClick = {this.RedirectToInsta}><img src ={instagram} className ="Footer-Button-icon"/></button>
                <button className ="Footer-Button" onClick ={this.RedirectToFb}><img src ={facebook} className ="Footer-Button-icon"/></button>
                </div>
            </div>
        </div>
            );
    }
}

export default Footer;