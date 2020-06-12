import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>KECCA</h1>
            <Link style={linkStyle} to='/sign_in' > Sign In </Link> | 
            <Link style={linkStyle} to='/sign_up' > Sign Up </Link>
        </header>
    )
}

const headerStyle= {
    background: '#191960',
    padding: '10px 10px',
    fontFamily: 'Helvetica',
    color: '#fff',
}

const linkStyle= {
    color: '#fff',
    textDecoration: 'none',
}

export default Header;