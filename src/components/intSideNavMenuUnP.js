import "./styles/intSideNavMenuUnP.css";

export default function IntSideNavMenuButton(props) {
    return (
        <div class="intSideNavMenuButton">
            <button class="intSideNavMenuButton">
                
                
                <div class="intSideNavMenuP">
                    <>{props.logoPath}</>
                    <p class="intSideNavMenuUnP">{props.label}</p>
                </div>
            </button>
        </div>
    );
}

            // <button class="sideNavButton">
            //     <div class="border2">
            //         <>{props.logoPath}</>
            //         <p class="sideNav">{props.label}</p>
            //     </div>
            // </button>