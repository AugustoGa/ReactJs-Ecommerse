import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const {cart, emptyCart, getCartTotal, removeFromCart, populateCart} = useContext(CartContext);
  const carritoVacio = cart.length === 0;

  useEffect(() => {
    populateCart();
  }// eslint-disable-next-line react-hooks/exhaustive-deps
  , [])


  return (
    <>
    <h2 className="cart-title">Mi Carrito</h2>
    <div className="cart">
    <table>
      <thead>
        <tr>
          <th className="header-image">Imágen</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cant</th>
          <th>Total</th>
          <th>X</th>
        </tr>
      </thead>
      <tbody>
        {(carritoVacio &&
          <tr>
            <td colSpan="6" className="empty-cart">
              <h3>No hay productos en el carrito</h3>
            </td>
          </tr>
        ) || 
        cart.map(item => (              
          <tr className="cart-item" key={item.id}>
            <td className="cart-item-img">
              <img src={item.picture} alt={item.name} />
            </td>
            <td className="cart-item-title">
              {item.title}
            </td>
            <td className="cart-item-price">${item.price}</td>
            <td className="cart-item-qty">
              {item.count}
            </td>
            <td className="cart-item-total">
              ${item.price * item.count}
            </td>
            <td className="cart-item-remove">
              <button className="botonPrincipal" onClick={() => removeFromCart(item.id)}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="cart-footer">
      {carritoVacio?
          <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
          :
          <>
          <h3>Total: ${getCartTotal()}</h3>
          <Link to="/checkout"><button className="botonPrincipal">Continuar al Pago</button></Link>
          <button className="botonPrincipal" onClick={emptyCart}>Vaciar Carrito</button>
          </>
      }
    </div>
    </div>      
          </>

  )
}
