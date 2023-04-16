import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Item = ({ item }) => {
    return (
        <Link to={`/details/${item.id}`}>

            <img width='150px' height='150px' src={item.image} alt="" />
            <h4 >{`$`} {item.price}</h4>

        </Link>
    );
};

export default Item;