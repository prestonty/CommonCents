import "../components/styles/lightButton.css";

// creates a white button with dark green border & text. props.text is text inside the button (I used it in the landing page for the login button)
export default function LightButton(props) {
    return (
        <div class="lightButton">
            <a class="login">
                {/* Need to add functionality to the button. What does it do after you click it? Well its used to login so make it take u to Google to sign in with google account. (I think evan knows how to do this).*/}
                <button onClick={props.onClick} class="lightFilled">
                    <div class="border1">{props.text}</div>
                </button>
            </a>
        </div>
    );
}
