import "./styles/intTopNavStatus.css";

export default function IntTopNavStatus(props) {
    return (
        <div class="intTopNavStatus">
            <div class="statusIcon">
                <>{props.logoPath}</>
            </div>
            <div class="statusText">
                <p>Hello Elizabeth, </p>
                <p>{props.label}</p>
            </div>
        </div>
    );
}
