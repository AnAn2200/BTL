import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import './pay.css'

var CARD_OPTION = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: "#fff",
            fontWeight: 500,
            fontSize: 16,
            fontFamily: "Roboco, Open Sans, Segoe UI, sans-serif",
            fontSmoothing: "antialiased",
            ":-webkit-autofill":{color: "#fce883"},
            "::placeholder": {color: "#87bbfd"} 
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}


export default function PaymentForm() {

    var [success, setSuccess] = useState(false);
    var stripe = useStripe();
    var elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    

    if(!error){
        try{
            const {id} = paymentMethod
            const responese = await axios.post("http://localhost:4000/payment",
            {
                amount: 1000,
                id
            })

            if(responese.data.success){
                console.log('Successful payment')
                setSuccess(true)
            }

        }catch(error){
            console.log('Error', error)
        }
    } else{
        console.log(error.message)
    }
}

  return (
    <div className='Contain'>
        <div className='text'>
            <h1>The Mobile Shop</h1>
        </div>
        {
            !success ?
            <form onSubmit={handleSubmit}>
                <fieldset className='FormGroup'>
                    <div className='FormRow'>
                        <CardElement options={CARD_OPTION}/>
                    </div>
                </fieldset>
                <button className='ButtonPay'>Pay</button>
            </form>
            :
            <div>
                <h2>
                    You just bought a sweet congrats
                </h2>
            </div>
        }
    </div>
  )
}
