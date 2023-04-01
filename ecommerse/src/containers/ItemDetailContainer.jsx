import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer() {
  const {id} = useParams();

  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'productos', id);
    getDoc(productRef).then((snapshot) => {
      setProducto(snapshot.data());
      setCargando(false);
      
    })
    .catch(error => {
      setError(error);
      setCargando(false);
    }
    );
  }, [id]);
  

if (cargando) {
  return <div className="loader">  <Spinner animation="border" variant="danger" />
  </div>;
}


return (
    <div className="itemCard">
      <ItemDetail detail={producto} id={id} />
    </div>
  )
}
