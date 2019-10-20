import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div>
            <h1>General Competition</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Sign Up</Link>
            </nav>
        </div>
    )
};

export default Nav;