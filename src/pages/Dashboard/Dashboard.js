import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
    bgColor: 'darkseagreen',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
    bgColor: 'darksalmon',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
    bgColor: '#00bfa5',
    color: 'white',
  },
  {
    title: 'Prods',
    imageUrl: '/icons/foods.svg',
    url: '/admin/foods',
    forAdmin: true,
    bgColor: 'cornflowerblue',
    color: 'white',
  },
];
