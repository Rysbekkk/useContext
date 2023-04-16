import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../Context';
import { getProducts } from '../../actions';
import Item from './Item';
import './Home.css'
const Home = () => {

    const { products, setProducts } = useContext(DataContext)

    console.log(products)
    useEffect(() => {
        getProducts(setProducts)
    }, [setProducts])

    const goods = products?.map(item =>
        <Item
            key={item.id}
            item={item}
        />
    )

    return (
        <div>
            <h2>Home</h2>
            <div className='home'>
                {goods}
            </div>
        </div>
    );
};

export default Home;