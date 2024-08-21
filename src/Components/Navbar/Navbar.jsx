import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='navbar'>
            <div className="nav-logo">
            <Link to='/'> <img src={logo} alt="" /> </Link>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'> Shop </Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'> Men </Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'> Women </Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'> Kids </Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <Link to='/Login'> <button>Login</button> </Link>
                <div className="nav-menu-hide">
                    <button onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}><ion-icon name="menu-outline" size="large"></ion-icon></button>
                    <ul className={menuOpen ? "nav-show" : ""}>
                        <div className='nav-hide-item-close'><button onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}>X</button></div>
                        <li onClick={() => { setMenu("shop"), window.location.reload() }}><Link to='/Login'> <p>Login</p> </Link></li>
                        <li onClick={() => { setMenu("shop"), window.location.reload() }}><Link style={{ textDecoration: 'none' }} to='/'> Shop </Link> {menu === "shop" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("mens"), window.location.reload() }}><Link style={{ textDecoration: 'none' }} to='/mens'> Men </Link> {menu === "mens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("womens"), window.location.reload() }}><Link style={{ textDecoration: 'none' }} to='/womens'> Women </Link> {menu === "womens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("kids"), window.location.reload() }}><Link style={{ textDecoration: 'none' }} to='/kids'> Kids </Link> {menu === "kids" ? <hr /> : <></>}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar