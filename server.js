require('dotenv').config()
const cors = require ('cors');
const express = require ("express");
const stripe = require("stripe")(process.env.S_SK_KEY);
const { v4: uuidv4} = require("uuid");


const app = express();

//middleware

app.use(express.json())
app.use(cors())

//routes

app.post("/payment",(req,res)=>{

const {amount,token,cart} =req.body;
console.log(amount+ " token: " + token + cart);
const idempotencyKey = uuidv4();

return stripe.customers.create({
    email:token.email,
    source: token.id
}).then(customer =>{
    stripe.charges.create({
        amount: amount,
        currency: "PLN",
        customer: customer.id,
        receipt_email: token.email,
        description: cart,
    },{idempotencyKey})
})
.then(result => res.status(200).json(result))
.catch(err=>console.log(err))

})

//listen
app.listen(8282,()=>{
    console.log("LISTENING AT PORT:8282")
})
