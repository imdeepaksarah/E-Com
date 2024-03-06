import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
<nav>
        <Link className="logo" to={"/"}>My.Store</Link>
        <ul className="nav-links">
            <li className="category">Electronics</li>
            <li className="category">Jewelery</li>
            <li className="category">Men's Clothing</li>
            <li className="category">Women's Clothing</li>
            <li> 
            <Link to={"/Cards"}><button className="cart"> Carts (0)</button></Link>
               </li>
        </ul>
    </nav>
  )
}

export default Navbar
