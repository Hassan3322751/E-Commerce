import React, { useState, useEffect } from 'react';
import classes from './paymentPage.module.css';
import { getNewOrderForCurrentUser } from '../../services/orderService';
import Title from '../../components/Title/Title';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';

import CARDS_PAYMENT from '../../components/PaymentButtons/Cards_Payment';
import JAZZ_PAYMENT from '../../components/PaymentButtons/Jazz_Payment';

export default function PaymentPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => {
      setOrder(data)
    }
  ).catch((err) => {
    window.location.reload()
  })
  }, []);

  return (
    <>
      {
       !order ? 
       <span style={{textAlign: 'center', margin: '10px 0px'}}>Loading</span>
          :   
        <div className={classes.container}>
          <div className={classes.content}>
            <Title title="Order Form" fontSize="1.6rem" />
            <div className={classes.summary}>
              <div>
                <h3>Name:</h3>
                <span>{order.name}</span>
              </div>
              <div>
                <h3>Address:</h3>
                <span>{order.address}</span>
              </div>
            </div>
            <OrderItemsList order={order} />
          </div>

          <div className={classes.map}>
            <Title title="Your Location" fontSize="1.6rem" />
            <Map readonly={true} location={order.addressLatLng} />
          </div>

          <div className={classes.buttons_container}>
            <div className={classes.buttons}>
              <CARDS_PAYMENT order={order} />
              <JAZZ_PAYMENT />
            </div>
          </div>
        </div>
      }
    </>
  );
}