import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'

export default function Navbar() {
  return (
      <nav className="row">
        <div className="logo col-md-2">
        <Logo />
        </div>
        
        <Menu />

        <div className="col-md-3"></div>
          <div className="col-md-2 menu">
            <div className="menuItem">
              <CartWidget />
              <a href="carrito.html" id="carritoCantidad">Carrito</a>
            </div>
            <div className="menuItem"><a href="singin.html">Iniciar Sesion</a></div>
          </div>
      </nav>
    )
}