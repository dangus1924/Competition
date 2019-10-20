import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/link'; ask this question on how to implement this

function Nav() {
    return(
        <div>
            <div className="navBar">
                <h2 className="GC">General Competition</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">Sign Up</Link>
                </nav>
            </div>
            
        </div>
    )
};

export default Nav;