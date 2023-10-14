import "./styles/sideNavButton.css";

export default function SideNavButton(props) {
    return (
        <div class="sideNavButton">
            <button>
                <div class="border2">
                    <>{props.logoPath}</>
                    <p>{props.label}</p>
                </div>
            </button>
        </div>
    );
}
