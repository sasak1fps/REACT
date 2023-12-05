import { FaFacebook, FaInstagram, FaTwitch} from 'react-icons/fa'
import './index.css';

function Footer(){
    return(
        
        <footer className="social">
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaTwitch/></li>
         </footer>
    )
}
export default Footer