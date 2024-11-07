import React from "react";
import '../Styles/Footer.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';

const Footer: React.FC = () => {

    return(
        <footer>
            <nav>
            <ul>
              <li>
                <Link
                className='footer-links'
                to ='/'>Home</Link>
              </li>
              <span>-</span>
              <li>
                <Link
                className = 'footer-links'
                to ='/about'>About</Link>
              </li>
              <span>-</span>
              <li>
                <Link
                className = 'footer-links'
                to ='/plans'>Plans</Link>
              </li>
          </ul>

        </nav>
        <div>
        <span>Need Support?</span>
        {/*<EmailLink />*/}
        </div>
    </footer>
    )

}

export default Footer;