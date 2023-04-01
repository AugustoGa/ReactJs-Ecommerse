import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../components/ItemCount';
import swal from 'sweetalert';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemDetail ( { detail, id } ) {
  let {category_id, title, price, picture, stock } = detail;
  
  const { isInCart, addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(0);


  //FUNCIONES DE ITEM COUNT
  const [count, setCount] = useState(1)

  const sumar = () => {
    count < stock ? setCount(count + 1) : swal('No hay suficiente stock')
  }
  const restar = () => {
    count > 1 ? setCount(count - 1) : swal('La cantidad no puede ser menor que 1')
  }
  const reset = () => {
    setCount(1)
  }

  const agregar = (count) => {
    if (count === 1) {
      swal(`Se agregó ${title} al carrito`);
    } else {	
    swal(`Se agregaron ${count} ${title} al carrito.`);
    }
    setCant(count);
    addToCart(detail, count, id);
    isInCart(id);
  }

//FIN FUNCIONES DE ITEM COUNT

  return (
    <div className="item-detail-contenedor">
            <div className="item-detail-featured-img">
                <img className="item-detail-img" src={picture} alt={title}/>
            </div>
        <div className="item-detail-info">
            <h2>{title}</h2>
            <h6>Categoría: {category_id} - Stock: {stock}</h6>
            <h4>$ {price}</h4>
            <div>
              {cant > 0 ? 
              <>
                <Link to={'/'}><button className="botonPrincipal">Seguir comprando</button></Link>
                <Link to={'/cart'}><button className="botonPrincipal">Terminar mi compra</button></Link>
                </>
                : 
                <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
                }
            </div>
        </div>
    </div>
    )
}
