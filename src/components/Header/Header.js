import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {


    return (
        <div>

            <h2>Header</h2>
            <NavLink to='/'>Home</NavLink>
        </div>
    );
};

export default Header;