import React from 'react';
import OrderPage from './OrderPage';

const orders = [
  {
    date: '25 Juin 2020',
    status: true
  },
  {
    date: '22 Avril 2020',
    status: false
  },
  {
    date: '03 Mars 2020',
    status: false
  },
  {
    date: '12 Décembre 2019',
    status: false
  }
];

const OrderList = () => {
  return (
    <div>
      {orders.map(order => (
        <OrderPage date={order.date} status={order.status} />
      ))}
    </div>
  );
};

export default OrderList;
