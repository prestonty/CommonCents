import "./styles/logNavbar.css";
import LightButton from "../components/lightButton.js";
import Progress from "../components/progress.js";

export default function LogNavbar() {
    return (
        <nav>
            <a class="Home" href="#Top">
                commoncents
            </a>

            <ul class="nav-links">
                <li>
                    <div></div>
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
