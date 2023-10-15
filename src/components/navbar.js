import { signInWithGoogle } from "../config/firebase";
import "./styles/navbar.css";
import LightButton from "../components/lightButton.js";

// This navbar is for the Landing Page (the page that asks you to sign up or login)
export default function Navbar() {
    return (
        <nav>
            <a className="Home" href="#Top">
                commoncents
            </a>

            <ul className="nav-links">
                <li>
                    <a className="nav-text" href="#Explore">
                        Explore
                    </a>
                </li>
                <li>
                    <a className="nav-text" href="#Benefits">
                        Benefits
                    </a>
                </li>
                <li>
                    <a className="nav-text" href="#Services">
                        Services
                    </a>
                </li>
                <li>
                    <a className="nav-text" href="#Aboutu=Us">
                        About Us
                    </a>
                </li>
            </ul>
            {/* Need to add functionality to the login button */}
            <LightButton onClick={signInWithGoogle} text={"Login"}></LightButton>
        </nav>
    );
}
