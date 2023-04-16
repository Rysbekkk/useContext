import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../Context';
import { getDetailsfake } from '../../actions';
import Item from '../Home/Item';
import './Details.css'



const Details = () => {
    const { details, setDetails } = useContext(DataContext)
    const { products, setProducts } = useContext(DataContext)
    const { id } = useParams()

    useEffect(() => {
        getDetailsfake(setDetails, id)
    }, [setDetails, id])


    const goods = products?.map(item =>
        <Item
            key={item.id}
            item={item}
        />
    )
    console.log(details)
    return (
        <div>
            <h2 >Details</h2>
            <div className='desc'>
                <img width='250px' height='250px' src={details.image} alt="" />

                <h1 className='price'>{details.description} <br />{`$`} {details.price}</h1>
            </div>
            {goods}
        </div>


    );
};

export default Details;