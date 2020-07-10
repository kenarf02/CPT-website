import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './Checkout.css'
import  history from '../../BrowserHistory'

class Checkout extends React.Component{
  
    handleToken = token =>{
        const amount = this.GenerateTotal();
        const cart = this.GenerateCartString();
        const body = {
            
            amount,
            token,
            cart
        }
        const headers={
            "Content-Type" : "application/json"
        } 

        return fetch('http://127.0.0.1:8282/payment-stripe',{
            method:"POST",
            headers,
            body: JSON.stringify(body)

        }).then(response =>{
            console.log("RESPONSE",response);
            const {status} = response;
            console.log("STATUS", status);
            window.localStorage.setItem("Cart",JSON.stringify([]));
        }).then(history.push('/Payment-complete'))
        .catch(err=>{
console.log(err);
        })
    }
    GenerateCartString(){
        var temp = '';
        
        JSON.parse(window.localStorage.getItem("Cart")).forEach(element => {
        var myJSON = JSON.stringify(element);
        temp+=(myJSON);
        });
        return temp;
    }
 GenerateTotal(){
     var sum =0;
    JSON.parse(window.localStorage.getItem("Cart")).forEach(element => {
        sum += element.Cost;
    });
    return sum;
}
    render(){
    return(
     <div className = "Checkout-Page">
         <StripeCheckout
         amount ={this.GenerateTotal()}
          billingAddress
          locale="auto"
          label="Zapłać kartą"
         stripeKey="pk_test_LOfj4FPCbq7Z92dEmr2IrOGI00oE7XmxYR"
         token ={this.handleToken}
         currency = "PLN"
         ><button className ="Add-to-Cart-cart">Zapłać Kartą</button></StripeCheckout>

     </div>   
    
    )
    }
}
export default Checkout