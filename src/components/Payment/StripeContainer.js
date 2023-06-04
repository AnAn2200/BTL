import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

var PUBLIC_KEY = "pk_test_51NF4jXE7MDcwEPLX1utqKtvM3e3zNtItDQWFO8iaRrVL4HEjYahwgBBm08pCQkUV24N4C3f5MwY1lsBQTy8PwULr003XovdfMs"

var stripeTestPromise = loadStripe(PUBLIC_KEY)


const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}


export default StripeContainer;