import { Link } from "react-router-dom"
import './success.css'

export default function PayFailed() {

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <CircleCheckIcon className="failIcon" />
        </div>
        <h1 className="title">Payment Failed</h1>
        <p className="message">
          Please check for your paymnet credentials again or try again.
        </p>
        <div className="buttons">
          <Link to="/payment" className="btn-primary">
            Pay Again
          </Link>
          <Link to="/" className="btn-outline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
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
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>
  )
}