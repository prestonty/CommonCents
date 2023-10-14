import "./styles/sideNavButton.css";

export default function SideNavButton(props) {
    return (
        <div class="sideNavButton">
            <button class="sideNavButton">
                <div class="border2">
                    <>{props.logoPath}</>
                    <p class="sideNav">{props.label}</p>
                </div>
            </button>
        </div>
    );
}
