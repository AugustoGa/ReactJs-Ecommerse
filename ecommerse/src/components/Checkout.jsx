import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Checkout.css";
import { useFormik } from "formik";

export default function Checkout() {
  const [sentOrder, setSentOrder] = useState(false);
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "pedidos");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const { cart, getCartTotal, emptyCart } = useContext(CartContext);

  function handleClick(values) {
    formik.handleSubmit(values);
    const order = {
      buyer: formik.values,
      items: cart,
      total: getCartTotal(),
      fecha: new Date(),
    };

    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setSentOrder(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (cart.length === 0) {
    return (
      <div className="checkoutBody">
        <h1>Tu carro está vacío</h1>
        <Link to="/cart">
          <button className="botonPrincipal">Volver al carro</button>
        </Link>
      </div>
    );
  }
  return (
    <>
      {sentOrder ? (
        <div className="sentOrder">
          <h1>¡Gracias por tu pedido!</h1>
          <h2>Tu número de pedido es:</h2>
          <p className="orderId">{orderId}</p>
          <p>Nos pondremos en contacto para gestionar el pago y el envío!</p>
          <Link to="/">
            <button className="botonPrincipal" onClick={emptyCart}>
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <div className="checkoutBody">
          <h1>¡Gracias por tu pedido!</h1>
          <h2>Completá con tu información</h2>
          <p>
            Llená tu información en el formulario para completar la compra. Nos
            pondremos en contacto para gestionar el pago y el envío!
          </p>
          <form className="formBody" onSubmit={handleClick}>
            <label>Nombre</label>
            <input
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            <label>Teléfono</label>
            <input
              id="phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <button type="submit" className="botonPrincipal">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
