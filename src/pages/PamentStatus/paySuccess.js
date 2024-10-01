import { Link } from "react-router-dom"
import { useEffect } from "react";

import { useCart } from '../../hooks/useCart';
import './success.css'

export default function PaySuccess() {
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart()
  }, [])
  
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <CircleCheckIcon className="successIcon" />
        </div>
        <h1 className="title">Payment Successful</h1>
        <p className="message">
          Thank you for your payment. Your order will be shipped soon.
        </p>
        <div className="buttons">
          <Link to="/" className="btn-primary">
            Go to Home
          </Link>
          <Link to="/orders" className="btn-outline">
            Track Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}