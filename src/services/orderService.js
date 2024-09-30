import axios from 'axios';
import { json } from 'react-router-dom';

export const createOrder = async order => {
  try {
    const { data } = axios.post('/api/orders/create', order);
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
  return data;
};

export const pay = async (body, headers) => {
  try {
    const { data } = await axios.post('/api/orders/pay', { 
      headers: headers,
      body: body.products.items
    });
    return data;
  } catch (error) {
    return error
  }
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('/api/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`/api/orders/allstatus`);
  return data;
};
