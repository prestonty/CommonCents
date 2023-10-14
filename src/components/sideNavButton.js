import "./styles/sideNavButton.css";

// this is the sidenavbar buttons that belongs to the interface page
// there should be buttons for dashboard, trends, breakdown, settings, log out
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
