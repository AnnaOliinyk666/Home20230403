import React from 'react'
import { useDispatch } from "react-redux";
import { addProductAction } from '../../store/reducer/productReducer';
import s from './style.module.css'

export default function AddProduct() {
    const dispatch = useDispatch();
    const submit = (e) =>{
        e.preventDefault();
        const {title,price,discount} = e.target;
        const newTitle = title.value;
        const newPrice = +price.value;
        const newDiscount = +discount.value;

        dispatch(addProductAction(newTitle,newPrice,newDiscount));

        title.value = '';
        price.value = '';
        discount.value = '';
    }
  return (
    <div className={s.container}>
        <form className={s.wrapper} onSubmit={submit}>
            <input type="text"  name='title' placeholder='title'/>
            <input type="number"  name='price' placeholder='price'/>
            <input type="number"  name='discount' placeholder='discount'/>
            <button>add</button>
        </form>
    </div>
  )
}
