import "./styles/navbar.css";
import LightButton from "../components/lightButton.js";

export default function Navbar() {
    return (
        <nav>
            <a class="Home" href="#Top">
                commoncents
            </a>

            <ul class="nav-links">
                <li>
                    <a class="nav-text" href="#Explore">
                        Explore
                    </a>
                </li>
                <li>
                    <a class="nav-text" href="#Benefits">
                        Benefits
                    </a>
                </li>
                <li>
                    <a class="nav-text" href="#Services">
                        Services
                    </a>
                </li>
                <li>
                    <a class="nav-text" href="#Aboutu=Us">
                        About Us
                    </a>
                </li>
            </ul>
            <LightButton text={"Login"}></LightButton>
        </nav>
    );
}
