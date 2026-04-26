import weatherLogo from '../../assets/image.png'
import instagramLogo from '../../assets/instagram.png'
import facebookLogo from '../../assets/facebook.png'
import whatsappLogo from '../../assets/whatsapp.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <img className='logo' src={weatherLogo} alt="Weather Logo" />
                <div className='address'>
                    <h3>Address</h3>
                    <p>
                        Svobody str. 35<br />
                        Kyiv<br />
                        Ukraine
                    </p>
                </div>
                <div className='contact'>
                    <h3>Contact us</h3>
                    <div className='contact-list'>
                        <a href=""><img src={instagramLogo} alt="" /></a>
                        <a href=""><img src={facebookLogo} alt="" /></a>
                        <a href=""><img src={whatsappLogo} alt="" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;