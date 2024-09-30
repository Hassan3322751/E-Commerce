import { useNavigate } from "react-router-dom"

const Jazz_Payment = () => {
    const navigate = useNavigate()

    return(
        <button onClick={() => navigate('/JazzPay')} 
            disabled={true}
            title="Pay by Jazz Cash"
            className="jazzBtn"
        >
            Pay by 
            <img src="./Jazz_Cash.png" alt="Jazz Cash" title="Jazz Cash" style={imgStyle}/>
        </button>
    )
}

export default Jazz_Payment

const imgStyle = {
    width: '3rem',
    margin: '0px 7px'
}