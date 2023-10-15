import "./styles/logNavbar.css";
import LightButton from "../components/lightButton.js";
import Progress from "../components/progress.js";

// this is the nav bar AFTER you login to the web application (for the interface page)

export default function LogNavbar() {
    return (
        <nav>
            {/* displays the web app's logo name in the top right corner */}
            <a class="Home" href="#Top">
                commoncents
            </a>

            {/* the Progress component is the status: "Hello Elizabeth, Great job! You're spending less than usual. Have a cookie!"  */}
            <ul class="nav-links">
                <li>
                    <Progress />
                </li>
            </ul>
            {/* THIS SECTION IS NOT DONE, need to add a drop down box for the selected MONTH that you want to see the financial history for */}
        </nav>
    );
}
