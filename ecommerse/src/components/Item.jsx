import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item( { producto } ) {
    const { id, category_id, title, price, picture, stock } = producto;
    return (
    <div>
        <Link to={"/producto/" + id} className="linkCard"><Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="imgProducto" variant="top" src={picture} />
            <Card.Body>
                <Card.Title className="lineClamp">{title}</Card.Title>
                <Card.Text className="smallTxt">Categoría: {category_id} - Stock: {stock}</Card.Text>
                <Card.Text>
                    Precio: $ {price}
                </Card.Text>
                <Button className="lse botonPrincipal">Ver detalle</Button>
            </Card.Body>
        </Card></Link>
    </div>
    )
}
