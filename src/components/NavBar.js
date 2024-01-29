import { Link } from 'react-router-dom'
import './NavBar.css';
import HeckyLogo from '../resources/Hecky_LogoPNG.png'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className='navChild left'>
            <Link to='./' style={{textDecoration: 'none'}}><img src={HeckyLogo} alt="Hecky's Logo" height="100%" width="auto"/></Link>
            </div>
            <div className='navChild right'>
                <a href='./'>Home</a>
                <a href='https://www.toasttab.com/heckys-sub-shop-315-state-st' target='_blank' rel='noreferrer'>Order Now</a>
                <a href='./catering'>Catering</a>
                <a href='./menu'>Menu</a>
                <a href='./contact'>Contact Us</a>
            </div>
        </div>
    )
}

export default NavBar;