import { loadStripe } from "@stripe/stripe-js"
import { pay } from '../../services/orderService';
import { toast } from 'react-toastify';

import './btnsStyle.css'

export default function CARDS_PAYMENT({ order }) {

    const CARD_PAY = async() => {
        if (!order.addressLatLng) {
            toast.warning('Please select your location on the map');
            return;
        }

        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISH)
        const body = {
            products: order,
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const orderStatus = await pay(body, headers)
        toast.error(orderStatus.rawType)

        const result = stripe.redirectToCheckout({
            sessionId: orderStatus.id
        });
        
        if (result.error){
            toast.error(result.error)
            return
        }
    }
    return(
        <button onClick={() => CARD_PAY()}
            title="Pay by Debit or Credit Card"
            className="cardBtn"
        >
            Pay by 
            <img src="credit-card.png" alt="Credit Debit Card" title="Credit Debit Card" 
                style={imgStyle}
            />
        </button>
    )
}

const imgStyle = {
    width: '2.5rem',
    margin: '0px 7px'
}