import "../components/styles/landing.css";
import DarkButton from "../components/darkButton.js";

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
                    <DarkButton>Get Started</DarkButton>
                </div>
            </div>
        </div>
    );
}
