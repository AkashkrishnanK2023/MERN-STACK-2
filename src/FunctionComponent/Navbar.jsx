import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    var [dropdown,showDropdown] = useState(false)
    const toggleDrop = () => {
        showDropdown(dropdown = !dropdown)
    }
    return (
        <header>
            <nav>   
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/sign-up" className='link'>Sign-up</Link></li>
                    <li><Link to="/Logout" className='link'>Logout</Link></li>
                    <li><Link to="/UseState" className='link'>UseState</Link></li>
                    <li><Link to="/UseEffect" className='link'>UseEffect</Link></li>
                    <li><Link to="/UseEffectAPI" className='link'>UseEffectAPI</Link></li>
                    <li><Link to="/UseEffectAPIimage" className="link">useAPIimg</Link></li> 
                    <div>
                    <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
                    {dropdown && (
                    <ul>
                        <li><Link to="/useState" target='_blank'>useState</Link></li>
                        <li><Link to="/UseEffect" className='link'>UseEffect</Link></li>
                       
                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;