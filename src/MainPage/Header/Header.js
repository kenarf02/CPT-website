import React from 'react';
import './Header.css';
import logo from './cpt logo.png'
class Header extends React.Component{
render(){
    return(
        <div className = 'HeaderBody'>
           <a className="Logo-Container"><img className= 'Logo' src={logo} alt= "CPT LOGO"></img></a> 
        </div>
    );

};
}
export default Header;
