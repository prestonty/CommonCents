import "../components/styles/lightButton.css";

export default function LightButton(props) {
    return (
        <div class="lightButton">
            <a class="login">
                <button class="lightFilled">
                    <div class="border1">{props.text}</div>
                </button>
            </a>
        </div>
    );
}
