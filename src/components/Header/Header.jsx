import weatherLogo from '../../assets/image.png'
import userLogo from '../../assets/user.png'
import './Header.css';

const Header = () => {
    return (
        <>
            <header>
                <img className='logo' src={weatherLogo} alt="Weather Logo" />
                <ul className='nav-list'>
                    <li className='nav-list-link'><a href="#">Who we are</a></li>
                    <li className='nav-list-link'><a href="#">Contacts</a></li>
                    <li className='nav-list-link'><a href="#">Menu</a></li>
                </ul>
                <div className='user-set'>
                    <button className='signup-btn'>Sign Up</button>
                    <img className='user' src={userLogo} alt="user" />
                </div>
            </header>
        </>
    );
}

export default Header;
