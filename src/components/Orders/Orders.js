import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../contextAPI/StateProvider';
import { db } from '../../firebase'
import Order from './Order/Order';
import './Orders.css'

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.email)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
    }, [user])

    return user ? (
        <div className='orders'>
            <h1 className='orders__title'>{user?.email.split('@')[0].split('').filter(el => !(/[0-9]/).test(el)).join('').toUpperCase()}'s Orders</h1>

            <div className="orders__order">
                {orders?.map((order, i) => (
                    <Order order={order} key={i} />
                ))}
            </div>
        </div>
    ): (
        <div className='orders__noUser'>
            <h2>Please Login to See Your Orders🤗</h2>
            <p>Here you can go 👉 <Link to="/login">Login</Link> Page</p>
        </div>
    )
}

export default Orders
