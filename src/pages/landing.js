import "../components/styles/landing.css";
import DarkButton from "../components/darkButton.js";

// This page is almost done in terms of appearance
// need to put images of laptop, computer, iphone (look at figma to see images are missing)
// also the buttons do not work (dark button on Get Started) and the light button in the navBar.js

export default function Landing() {
    return (
        <div class="Landing">
            <div class="frameWrap">
                <div class="content">
                    <h1 class="main">
                        Make budgeting <div class="bold">easy.</div>
                        <br /> Make it{" "}
                        <div class="bold green">commoncents.</div>
                    </h1>
                    <div>
                        <p class="description">
                            Manage and monitor your spending
                            <br />
                            anywhere, anytime.
                        </p>
                    </div>
                    <DarkButton text="Get Started"></DarkButton>
                </div>
            </div>
        </div>
    );
}
