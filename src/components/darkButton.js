// this statement about imports the css file for the darkButton. This css file is SPECIFICALLY for the dark button ONLY
import "../components/styles/darkButton.css";

// creates a dark button and inside the button has text (in props.description)
export default function DarkButton(props) {
    return (
        <div class="darkButton">
            <button class="darkFilled">
                <div class="border2">{props.text}</div>
            </button>
        </div>
    );
}
