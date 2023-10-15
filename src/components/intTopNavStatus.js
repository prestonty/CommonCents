import "./styles/intTopNavStatus.css";

export default function IntTopNavStatus(props) {
    return (
        <div className="intTopNavStatus">
            <div className="statusIcon">
                <>{props.logoPath}</>
            </div>
            <div className="statusText">
                <p>Hello Elizabeth, </p>
                <p>{props.label}</p>
            </div>
        </div>
    );
}
