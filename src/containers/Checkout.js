import React, { Component } from 'react';
import { CardElement, injectStripe, Elements, StripeProvider } from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        // User clicked submit
    }

    render() {
        return (
            <div>
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Purchase</button>
            </div>
        );
    }
}

const InjectedForm = injectStripe(CheckoutForm);

const WrappedForm = () => (
    <StripeProvider apiKey="pk_test_njxyPst1hV2Zj8khSc0SJrSm00IMZHN4Gs">
        <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
                <InjectedForm />
            </Elements>
        </div>
    </StripeProvider>
)

export default WrappedForm

