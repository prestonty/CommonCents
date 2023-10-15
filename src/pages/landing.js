import { signInWithGoogle } from "../config/firebase";
import "../components/styles/landing.css";
import DarkButton from "../components/darkButton.js";

// This page is almost done in terms of appearance
// need to put images of laptop, computer, iphone (look at figma to see images are missing)
// also the buttons do not work (dark button on Get Started) and the light button in the navBar.js

export default function Landing() {
    return (
        <div className="Landing">
            <div className="frameWrap">
                <div className="content">
                    <h1 className="main">
                        Make budgeting <div className="bold">easy.</div>
                        <br /> Make it{" "}
                        <div className="bold green">commoncents.</div>
                    </h1>
                    <div>
                        <p className="description">
                            Manage and monitor your spending
                            <br />
                            anywhere, anytime.
                        </p>
                    </div>
                    <DarkButton onClick={signInWithGoogle} text="Get Started"></DarkButton>
                </div>
            </div>
        </div>
    );
}
