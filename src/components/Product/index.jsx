import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'

export default function Product({id,title,price,discount}) {
  
    const dispatch = useDispatch();
   
    
  return (
    <div className={s.card}>
        <p> <b>{title}</b> </p>
        <p>price: {price}$</p>
        <p>new price: {price - (price/100*discount)}$</p>
    </div>
  )
}
