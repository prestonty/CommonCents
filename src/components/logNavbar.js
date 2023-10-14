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
                    <Progress />
                </li>
            </ul>
            <LightButton text={"Login"}></LightButton>
        </nav>
    );
}
