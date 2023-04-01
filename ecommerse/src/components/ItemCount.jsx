import React, { useContext, useState } from 'react'
import './ItemCount.css';
import { CartContext } from '../context/CartContext';

export default function ItemCount({ onAdd, sumar, restar, reset, stock, count }) {
    const {cart, addToCart} = useContext(CartContext);

    return (
        <div className="cajita">
            <div className="botones">
                <button className="botonPrincipal" onClick={restar}>-</button>
                <p className="item-count">{ count }</p>
                <button className="botonPrincipal" onClick={sumar}>+</button>
            </div>
            <div className="agregar">
                <button className="botonPrincipal" onClick={() => {onAdd(count); reset()}}>Agregar</button>
            </div>
        </div>
    )
}

