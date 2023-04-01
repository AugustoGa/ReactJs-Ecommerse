import React from 'react'
import Item from './Item'
import './ItemList.css';

export default function ItemList( { productos } ) {

    return (
        <div className="listaProductos">{productos?.map(producto => <Item key={producto.id} producto={producto} />)}</div>
    )
}