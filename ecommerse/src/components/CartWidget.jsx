import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {

  const {getItemQuantity} = useContext(CartContext);

  return (
    <IconContext.Provider value={{ color: "rgba(255, 255, 255, .55)", size: "2em", className:"iconos"}}>
      <div>
        <Link to="/cart"><FaShoppingCart />
          {getItemQuantity() > 0 ?
            <Badge bg="light" text="secondary" pill>{getItemQuantity()}</Badge>
          : 
          null}
        </Link>
      </div>
    </IconContext.Provider>
  )
}
