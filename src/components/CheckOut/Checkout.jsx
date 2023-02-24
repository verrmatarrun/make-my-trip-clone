import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className='payment-container'>
      <div className='main'>
        <div className='right-payment-info'>
          <div className='payment-method'>
            <h2>Payment Method</h2>
            <div className='radio-container'>
              <input
                id='card'
                name='payment-type'
                type='radio'
                defaultChecked
                required
              />
              <label htmlFor='card'>Card</label>
              <input id='paypal' name='payment-type' type='radio' required />
              <label htmlFor='paypal'>PayPal</label>
            </div>
          </div>
          <form id='payment-form'>
            <div className='card-info-container'>
              <div className='card-info'>
                <label>
                  Card Number
                  <input
                    className='full-width'
                    id='card-num'
                    type='text'
                    placeholder='1234 5678 9012 3456'
                    required
                  />
                </label>
                <label>
                  Name on Card
                  <input
                    className='full-width'
                    id='name'
                    type='text'
                    placeholder='Steve Rogers'
                    required
                  />
                </label>
                <div className='expire-ccv'>
                  <label>
                    Expires
                    <span className='expire-date'>
                      <input
                        id='month'
                        type='text'
                        size={2}
                        maxLength={2}
                        placeholder='MM'
                        required
                      />
                      <span>/</span>
                      <input
                        id='year'
                        type='text'
                        size={2}
                        maxLength={2}
                        placeholder='YY'
                        required
                      />
                    </span>
                  </label>
                  <label>
                    CCV
                    <input
                      id='ccv'
                      type='text'
                      size={3}
                      maxLength={3}
                      placeholder={123}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <label className='save-card-info'>
              <input type='checkbox' required />
              Save card for faster checkout
            </label>
          </form>
          <button className='button' onClick={() => alert("Order Placed")}>
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
