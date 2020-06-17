import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


class Checkout extends React.Component{
  
    handleToken = async(token)=>{
        let amount = this.GenerateTotal();
        await fetch ('api/checkout',{
            method :'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({token,amount})
        })
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
     <div>
         <StripeCheckout
         amount ={this.GenerateTotal()}
          billingAddress
          locale="auto"
         stripeKey="pk_test_LOfj4FPCbq7Z92dEmr2IrOGI00oE7XmxYR"
         token ={this.handleToken}
         label = "Zapłać 💳"
         currency = "PLN"
         ></StripeCheckout>
         
     </div>   
    
    )
    }
}
export default Checkout