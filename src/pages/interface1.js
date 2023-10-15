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
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M37.29 20.7805C36.7898 20.2041 36.1716 19.7419 35.4773 19.4252C34.783 19.1085 34.0288 18.9447 33.2656 18.9449H29.0109L29.3693 16.7679C29.4961 16.0013 29.3431 15.2147 28.9382 14.5514C28.5334 13.8882 27.9036 13.3927 27.1637 13.1551C26.4239 12.9175 25.6234 12.9538 24.9081 13.2574C24.1928 13.5609 23.6104 14.1114 23.2672 14.8086L21.2257 18.9449H18.3331C16.9192 18.9466 15.5637 19.509 14.5639 20.5088C13.5641 21.5086 13.0017 22.8641 13 24.2779V29.611C13.0017 31.0249 13.5641 32.3804 14.5639 33.3802C15.5637 34.38 16.9192 34.9424 18.3331 34.9441H32.519C33.8026 34.9388 35.0417 34.473 36.0109 33.6312C36.98 32.7895 37.6148 31.6279 37.7998 30.3576L38.5518 25.0246C38.6577 24.2681 38.5998 23.4976 38.3821 22.7654C38.1644 22.0332 37.792 21.3563 37.29 20.7805ZM15.1332 29.611V24.2779C15.1332 23.4293 15.4703 22.6154 16.0704 22.0153C16.6705 21.4152 17.4844 21.0781 18.3331 21.0781H20.4663V32.8108H18.3331C17.4844 32.8108 16.6705 32.4737 16.0704 31.8736C15.4703 31.2735 15.1332 30.4597 15.1332 29.611ZM36.4345 24.7249L35.6815 30.0579C35.5714 30.8195 35.1916 31.5162 34.6113 32.0214C34.0309 32.5266 33.2885 32.8068 32.519 32.8108H22.5995V20.7944C22.7 20.7068 22.7832 20.6012 22.8448 20.4829L25.1796 15.7525C25.2672 15.5946 25.391 15.4597 25.5408 15.3589C25.6907 15.2581 25.8623 15.1943 26.0416 15.1728C26.2209 15.1512 26.4027 15.1725 26.5722 15.2349C26.7416 15.2973 26.8939 15.399 27.0163 15.5317C27.1211 15.6536 27.1977 15.7971 27.2407 15.9519C27.2837 16.1068 27.2919 16.2693 27.2649 16.4277L26.7017 19.8408C26.677 19.9933 26.6857 20.1494 26.7272 20.2982C26.7687 20.447 26.8421 20.585 26.9422 20.7027C27.0423 20.8204 27.1668 20.9149 27.3071 20.9797C27.4473 21.0445 27.5999 21.0781 27.7544 21.0781H33.2656C33.7236 21.078 34.1763 21.1763 34.5931 21.3663C35.0098 21.5562 35.381 21.8334 35.6814 22.1791C35.9818 22.5248 36.2045 22.931 36.3344 23.3702C36.4644 23.8094 36.4985 24.2713 36.4345 24.7249Z" fill="#00715B"/>
                            <path d="M23.6611 1.33892C23.6611 0.599457 24.2605 0 25 0C25.7395 0 26.3389 0.599457 26.3389 1.33893V7.23019C26.3389 7.96966 25.7395 8.56912 25 8.56912C24.2605 8.56912 23.6611 7.96966 23.6611 7.23019V1.33892Z" fill="#00715B"/>
                            <path d="M23.6611 42.7698C23.6611 42.0303 24.2605 41.4309 25 41.4309C25.7395 41.4309 26.3389 42.0303 26.3389 42.7698V48.6611C26.3389 49.4005 25.7395 50 25 50C24.2605 50 23.6611 49.4005 23.6611 48.6611V42.7698Z" fill="#00715B"/>
                            <path d="M48.6611 23.6611C49.4005 23.6611 50 24.2606 50 25C50 25.7395 49.4005 26.339 48.6611 26.339H42.7698C42.0303 26.339 41.4309 25.7395 41.4309 25C41.4309 24.2606 42.0303 23.6611 42.7698 23.6611H48.6611Z" fill="#00715B"/>
                            <path d="M7.23019 23.6611C7.96966 23.6611 8.56912 24.2606 8.56912 25C8.56912 25.7395 7.96966 26.339 7.23019 26.339H1.33892C0.599457 26.339 -3.23232e-08 25.7395 0 25C3.23232e-08 24.2606 0.599457 23.6611 1.33893 23.6611H7.23019Z" fill="#00715B"/>
                            <path d="M40.7842 7.3224C41.3071 6.79951 42.1548 6.79951 42.6777 7.3224C43.2006 7.84528 43.2006 8.69304 42.6777 9.21592L38.512 13.3817C37.9891 13.9046 37.1413 13.9046 36.6184 13.3817C36.0956 12.8588 36.0956 12.011 36.6184 11.4882L40.7842 7.3224Z" fill="#00715B"/>
                            <path d="M11.4881 36.6185C12.011 36.0956 12.8588 36.0956 13.3816 36.6185C13.9045 37.1414 13.9045 37.9892 13.3816 38.5121L9.21589 42.6778C8.69301 43.2007 7.84525 43.2007 7.32236 42.6778C6.79948 42.1549 6.79948 41.3072 7.32237 40.7843L11.4881 36.6185Z" fill="#00715B"/>
                            <path d="M42.6777 40.7844C43.2006 41.3072 43.2006 42.155 42.6777 42.6779C42.1548 43.2008 41.3071 43.2008 40.7842 42.6779L36.6184 38.5121C36.0956 37.9892 36.0956 37.1415 36.6184 36.6186C37.1413 36.0957 37.9891 36.0957 38.512 36.6186L42.6777 40.7844Z" fill="#00715B"/>
                            <path d="M13.3817 11.4882C13.9045 12.0111 13.9045 12.8589 13.3817 13.3818C12.8588 13.9046 12.011 13.9046 11.4881 13.3818L7.32237 9.21599C6.79949 8.69311 6.79949 7.84535 7.32237 7.32247C7.84526 6.79959 8.69302 6.79959 9.2159 7.32247L13.3817 11.4882Z" fill="#00715B"/>
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
