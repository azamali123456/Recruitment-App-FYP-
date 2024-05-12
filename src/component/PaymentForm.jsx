import React, { useState, useEffect } from 'react';
import { Elements, useElements } from '@stripe/react-stripe-js';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const stripePromise = loadStripe('pk_test_51MeF13HBiT1lXrZG85N6Aq9Onzp8IepCYirSjemN5NmyvwRuXZSQciOpVg0xqDwibmlJJuWnpxbdyUJxbDc87Zhl00Y2EiiMXh');

let stripe;

const CheckoutForm = ({ productId }) => {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const elements = useElements();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [country, setCountry] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [paymentMethodType, setPaymentMethodType] = useState('card');

    useEffect(() => {
        stripePromise.then(instance => {
            stripe = instance;
        });
    }, []);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethodType(e.target.value);
    };

    const checkOut = (obj) => {
        const url = 'http://localhost:4000/api/checkout/create-charge';
        axios.post(url, obj, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('API Response:', response.data);
                toast.success('Payment successful!');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error(error.message || 'Payment failed');
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const stripe = await stripePromise;
    
        if (!elements || !stripe) {
            return;
        }
    
        try {
            let tokenResult;
    
            if (paymentMethodType === 'card') {
                const cardElement = elements.getElement(CardNumberElement);
                tokenResult = await stripe.createToken(cardElement);
            } else if (paymentMethodType === 'us_bank_account') {
                // Collect bank account details and create bank account token
                tokenResult = await stripe.createToken('bank_account', {
                    country: 'US',
                    currency: 'usd',
                    routing_number: '110000000', // Example routing number
                    account_number: '000123456789', // Example account number
                    account_holder_name: 'John Doe', // Example account holder name
                    account_holder_type: 'individual', // Example account holder type
                });
            }
    
            if (tokenResult.error) {
                console.error('Stripe token creation error:', tokenResult.error);
                toast.error('Payment failed');
                return;
            }
            const products = [{ jobID: 1, title: 'Job 1', quantity: 1, price: 1000 }];

            // Proceed with payment
            const paymentData = {
                token: tokenResult.token.id,
                name,
                email,
                line1: 'This is line One',
                paymentMethodType,
                address: {
                    line1: city,
                    city: city,
                    state: city,
                    postal_code: postal_code,
                    country: country,
                },
                job: products.map((product) => {
                    return {
                        productId: product.jobID,
                        quantity: product.quantity,
                        price: product.price,
                    };
                }),
            };
    
            checkOut(paymentData);
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'Payment failed');
        }
    };
    
    const handleToken = async (token) => {
        try {
            
          // Send token and payment information to the server
          const response = await axios.post('http://localhost:4000/api/checkout/create-charge', {
            token: token.id,
            amount: 1000, // Amount in cents
            currency: 'USD',
            description: 'Product Description',
          });
    
          setStatus(response.data.message);
        } catch (error) {
          console.error('Error:', error);
          setStatus('Payment failed');
        }
      };

    return (
       
        <div>
         <form onSubmit={handleSubmit}>
            <div className='mt-2 p-3' style={{ backgroundColor: 'white' }}>
            <div className='mt-2 p-3' style={{ backgroundColor: 'white' }}>
                <label style={{ color: 'black' }}>User Name :</label>
                <input onChange={(e) => setName(e.target.value)} />
                <br />
                <label style={{ color: 'black' }}>Email :</label>
                <input onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label style={{ color: 'black' }}>City :</label>
                <input onChange={(e) => setCity(e.target.value)} />
                <br />
                <label style={{ color: 'black' }}>Postal Code :</label>
                <input onChange={(e) => setPostal_code(e.target.value)} />
                <br />
                <label>Select Payment Method:</label>
                <select value={paymentMethodType} onChange={handlePaymentMethodChange}>
                    <option value='card'>Card</option>
                    <option value='us_bank_account'>US Bank Account</option>
                    <option value='cashapp'>Cash App</option>
                </select>
                <label style={{ color: 'black' }}>Country :</label>
                <input onChange={(e) => setCountry(e.target.value)} />
                <label>Card Number:</label>
                <CardNumberElement className='custom-card-element-input' />
                <label>Expiry:</label>
                <CardExpiryElement className='custom-card-element-input' />
                <label>CVC:</label>
                <CardCvcElement className='custom-card-element-input' />
          
                {/* {paymentMethodType === 'us_bank_account' && <BankAccountElement className='custom-bank-account-element-input' />} */}
            </div>
            </div>
            <button type='submit' className='btn mt-3 ' style={{ background: 'white', padding: '4px' }}>
                Pay Now
            </button>
        </form>
     <p>{status}</p>
        </div>
    );
};

const PaymentForm = ({ productId }) => {
    return (
        <div className='row'>
            <ToastContainer />
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm productId={productId} />
                </Elements>
            </div>
            <div className='col-sm-4'></div>
        </div>
    );
};

export default PaymentForm;
