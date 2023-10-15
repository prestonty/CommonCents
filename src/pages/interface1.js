import "../components/styles/interface.css";
import LogNavbar from "../components/logNavbar.js";
import SideNavButton from "../components/sideNavButton.js";
import BarGraph from "../components/barGraph.js";
import Logo from "../components/logo.js";
import IntTopNavStatus from "../components/intTopNavStatus.js";
import ProfileHUD from "../components/profileHUD.js";
import IntSideNav from "../components/intSideNav.js";
import SemiAnnualSpending from '../components/graphs/SemiAnnualSpending.js';


const data = [
    { name: "May", val: 5000, color: "#00715B" },
    { name: "Jun", val: 5800, color: "#D9893A" },
    { name: "Jul", val: 8100, color: "#D93A3A" },
    { name: "Aug", val: 9600, color: "#D93A3A" },
    { name: "Sep", val: 5400, color: "#D9893A" },
    { name: "Oct", val: 3700, color: "#00715B" },
]

export default function Interface() {
    return (
        <div class = "dashBoard">
            <div class="intTopNav">
                <Logo />
                <IntTopNavStatus
                    logoPath={
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="51" viewBox="0 0 49 51" fill="none">
                            <path d="M23.6226 8V2M23.6226 49V43M11.2482 13.1256L7.00553 8.88297M40.2396 42.1171L35.997 37.8744M6.12256 25.5H0.122559M47.1227 25.5H41.1227M11.2482 37.8744L7.00553 42.117M40.2396 8.88293L35.997 13.1256M35.5194 20.1351C34.9965 19.5324 34.3501 19.0492 33.6242 18.718C32.8982 18.3869 32.1096 18.2156 31.3117 18.2158H26.8631L27.2378 15.9396C27.3704 15.1381 27.2104 14.3156 26.7871 13.6222C26.3638 12.9287 25.7053 12.4105 24.9318 12.1622C24.1582 11.9138 23.3212 11.9517 22.5733 12.2691C21.8254 12.5865 21.2165 13.1621 20.8576 13.891L18.7231 18.2158H15.6986C14.2203 18.2176 12.803 18.8056 11.7577 19.851C10.7124 20.8963 10.1243 22.3136 10.1226 23.7919V29.368C10.1243 30.8463 10.7124 32.2636 11.7577 33.3089C12.803 34.3543 14.2203 34.9423 15.6986 34.9441H30.531C31.8732 34.9386 33.1687 34.4515 34.182 33.5714C35.1954 32.6913 35.8591 31.4768 36.0525 30.1486L36.8387 24.5725C36.9494 23.7816 36.889 22.976 36.6613 22.2104C36.4337 21.4449 36.0443 20.7371 35.5194 20.1351ZM12.353 29.368V23.7919C12.353 22.9046 12.7055 22.0536 13.3329 21.4262C13.9603 20.7987 14.8113 20.4462 15.6986 20.4462H17.9291V32.7136H15.6986C14.8113 32.7136 13.9603 32.3611 13.3329 31.7337C12.7055 31.1063 12.353 30.2553 12.353 29.368ZM34.625 24.2592L33.8377 29.8353C33.7226 30.6315 33.3255 31.36 32.7187 31.8882C32.1118 32.4165 31.3356 32.7094 30.531 32.7136H20.1595V20.1496C20.2646 20.058 20.3516 19.9476 20.416 19.8239L22.8572 14.878C22.9488 14.7128 23.0782 14.5718 23.2349 14.4664C23.3915 14.361 23.571 14.2943 23.7584 14.2718C23.9459 14.2493 24.136 14.2715 24.3132 14.3368C24.4904 14.402 24.6496 14.5084 24.7776 14.6471C24.8872 14.7745 24.9673 14.9245 25.0122 15.0865C25.0571 15.2484 25.0658 15.4182 25.0375 15.5839L24.4486 19.1526C24.4228 19.312 24.4319 19.4752 24.4753 19.6308C24.5187 19.7864 24.5955 19.9307 24.7001 20.0537C24.8048 20.1767 24.935 20.2756 25.0816 20.3433C25.2282 20.4111 25.3878 20.4462 25.5494 20.4462H31.3117C31.7906 20.4462 32.2639 20.5489 32.6996 20.7475C33.1354 20.9461 33.5234 21.2359 33.8375 21.5974C34.1516 21.9589 34.3845 22.3836 34.5204 22.8428C34.6562 23.302 34.6919 23.785 34.625 24.2592Z" stroke="#00715B" stroke-width="2.42441" stroke-linecap="round" />
                        </svg>
                    }
                    label={"Great job! You're spending less than usual. Have a cookie! 🍪 "}
                ></IntTopNavStatus>
                <ProfileHUD />
            </div>
            
            <div class="intSideNav">
                <IntSideNav />
            </div> 
            <div className="chart">
                <div className="barGraph">
                    <SemiAnnualSpending data={data} />
                </div>
            </div>
        </div>
    );
}
