import "../components/styles/interface.css";
import LogNavbar from "../components/logNavbar.js";
import SideNavButton from "../components/sideNavButton.js";
import BarGraph from "../components/barGraph.js";
import PieGraph from "../components/pieGraph.js";

export default function Interface() {
    return (
        <div>
            <div>
                <div class="sideNav grid-vertical">
                    <div class="topSideNav">
                        <SideNavButton
                            logoPath={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <path
                                        d="M10.054 10.1487H2.23422C1.00205 10.1487 0 9.14661 0 7.91443V5.68021C0 2.60034 2.50568 0.0946655 5.58555 0.0946655H10.054C11.2862 0.0946655 12.2882 1.09671 12.2882 2.32888V7.91443C12.2882 9.14661 11.2862 10.1487 10.054 10.1487ZM21.2251 26.9053H16.7566C15.5245 26.9053 14.5224 25.9032 14.5224 24.6711V19.0855C14.5224 17.8534 15.5245 16.8513 16.7566 16.8513H24.5764C25.8086 16.8513 26.8106 17.8534 26.8106 19.0855V21.3197C26.8106 24.3996 24.305 26.9053 21.2251 26.9053ZM24.5764 14.6171H16.7566C15.5245 14.6171 14.5224 13.615 14.5224 12.3829V2.32888C14.5224 1.09671 15.5245 0.0946655 16.7566 0.0946655H21.2251C24.305 0.0946655 26.8106 2.60034 26.8106 5.68021V12.3829C26.8106 13.615 25.8086 14.6171 24.5764 14.6171ZM10.054 26.9053H5.58555C2.50568 26.9053 0 24.3996 0 21.3197V14.6171C0 13.3849 1.00205 12.3829 2.23422 12.3829H10.054C11.2862 12.3829 12.2882 13.3849 12.2882 14.6171V24.6711C12.2882 25.9032 11.2862 26.9053 10.054 26.9053Z"
                                        fill="#F5F5F5"
                                    />
                                </svg>
                            }
                            label={"Dashboard"}
                        ></SideNavButton>
                        <SideNavButton
                            logoPath={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <path
                                        d="M13.4053 0.0946655C11.5621 0.0946655 10.054 1.60276 10.054 3.44599V23.554C10.054 25.3972 11.5621 26.9053 13.4053 26.9053C15.2485 26.9053 16.7566 25.3972 16.7566 23.554V3.44599C16.7566 1.60276 15.2485 0.0946655 13.4053 0.0946655ZM14.5224 23.554C14.5224 24.1684 14.0197 24.6711 13.4053 24.6711C12.7909 24.6711 12.2882 24.1684 12.2882 23.554V3.44599C12.2882 2.83158 12.7909 2.32888 13.4053 2.32888C14.0197 2.32888 14.5224 2.83158 14.5224 3.44599V23.554ZM23.4593 6.79732C21.6161 6.79732 20.108 8.30542 20.108 10.1487V23.554C20.108 25.3972 21.6161 26.9053 23.4593 26.9053C25.3025 26.9053 26.8106 25.3972 26.8106 23.554V10.1487C26.8106 8.30542 25.3025 6.79732 23.4593 6.79732ZM24.5764 23.554C24.5764 24.1684 24.0737 24.6711 23.4593 24.6711C22.8449 24.6711 22.3422 24.1684 22.3422 23.554V10.1487C22.3422 9.53424 22.8449 9.03154 23.4593 9.03154C24.0737 9.03154 24.5764 9.53424 24.5764 10.1487V23.554ZM3.35133 13.5C1.5081 13.5 0 15.0081 0 16.8513V23.554C0 25.3972 1.5081 26.9053 3.35133 26.9053C5.19456 26.9053 6.70266 25.3972 6.70266 23.554V16.8513C6.70266 15.0081 5.19456 13.5 3.35133 13.5ZM4.46844 23.554C4.46844 24.1684 3.96574 24.6711 3.35133 24.6711C2.73692 24.6711 2.23422 24.1684 2.23422 23.554V16.8513C2.23422 16.2369 2.73692 15.7342 3.35133 15.7342C3.96574 15.7342 4.46844 16.2369 4.46844 16.8513V23.554Z"
                                        fill="#4C4948"
                                    />
                                </svg>
                            }
                            label={"Trends"}
                        ></SideNavButton>
                        <SideNavButton
                            logoPath={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <path
                                        d="M21.1404 13.349H15.8084C15.2083 13.349 14.6328 13.1106 14.2085 12.6863C13.7842 12.2619 13.5458 11.6864 13.5458 11.0863V5.73964C13.5473 5.21921 13.4291 4.70539 13.2004 4.23792C12.9717 3.77044 12.6385 3.36183 12.2266 3.04367C11.8364 2.73461 11.3803 2.51939 10.8936 2.41464C10.4069 2.30989 9.90267 2.31841 9.41981 2.43954C6.67707 3.12039 4.24886 4.71698 2.53675 6.96528C0.82464 9.21358 -0.068816 11.9789 0.00413848 14.8039C0.0770929 17.629 1.11209 20.3445 2.93796 22.5014C4.76383 24.6584 7.27121 26.1275 10.0454 26.6659C13.1646 27.2629 16.3941 26.6449 19.0724 24.9383C21.7507 23.2317 23.6752 20.5657 24.4518 17.4863C24.5734 17.0028 24.5823 16.4978 24.4777 16.0104C24.3732 15.5229 24.158 15.066 23.8488 14.6749C23.5269 14.2636 23.1159 13.9306 22.6468 13.701C22.1777 13.4713 21.6627 13.351 21.1404 13.349ZM22.2582 16.933C21.825 18.6774 20.9363 20.2754 19.6829 21.5636C18.4295 22.8518 16.8564 23.7839 15.1246 24.2647C13.3927 24.7455 11.5643 24.7576 9.82618 24.2999C8.08811 23.8422 6.5028 22.931 5.23242 21.6595C3.96203 20.3881 3.05216 18.802 2.59586 17.0636C2.13957 15.3251 2.15322 13.4967 2.63543 11.7652C3.11764 10.0338 4.0511 8.4615 5.34034 7.20917C6.62957 5.95685 8.22831 5.06945 9.97303 4.63772C10.1223 4.60043 10.2782 4.59861 10.4283 4.6324C10.5784 4.66619 10.7185 4.73465 10.8374 4.83231C10.9778 4.93934 11.0916 5.07728 11.1701 5.23541C11.2486 5.39354 11.2896 5.56763 11.2899 5.74416V11.0863C11.2899 12.2865 11.7667 13.4375 12.6153 14.2862C13.464 15.1349 14.615 15.6116 15.8152 15.6116H21.1461C21.3241 15.6124 21.4997 15.6535 21.6596 15.7319C21.8195 15.8102 21.9596 15.9239 22.0692 16.0642C22.1654 16.1847 22.2324 16.3259 22.265 16.4766C22.2976 16.6273 22.296 16.7835 22.2582 16.933Z"
                                        fill="#4C4948"
                                    />
                                    <path
                                        d="M26.7268 8.19678C26.206 6.28197 25.1941 4.53636 23.7915 3.13269C22.3888 1.72902 20.6439 0.715953 18.7294 0.193741C18.5287 0.139787 18.3218 0.112401 18.114 0.112285C17.8151 0.109445 17.5185 0.165874 17.2415 0.278311C16.9645 0.390748 16.7125 0.556964 16.5001 0.767356C16.2877 0.977747 16.1192 1.22814 16.0041 1.50407C15.8891 1.78 15.8298 2.07599 15.8298 2.37495V7.69221C15.8298 8.59235 16.1874 9.45563 16.8239 10.0921C17.4604 10.7286 18.3237 11.0862 19.2238 11.0862H24.5626C24.9118 11.0828 25.2555 10.999 25.5671 10.8412C25.8786 10.6835 26.1496 10.456 26.359 10.1765C26.5683 9.89698 26.7104 9.57296 26.7742 9.22962C26.838 8.88627 26.8218 8.53284 26.7268 8.19678ZM23.9008 8.82354H19.2193C18.9193 8.82354 18.6315 8.70435 18.4193 8.49218C18.2072 8.28001 18.088 7.99226 18.088 7.69221L18.0789 2.38287C18.0872 2.37688 18.097 2.37335 18.1072 2.37269H18.1366C19.6776 2.79251 21.0815 3.60913 22.2083 4.74106C23.3351 5.873 24.1453 7.28065 24.5581 8.82354H23.9008Z"
                                        fill="#4C4948"
                                    />
                                </svg>
                            }
                            label={"Breakdown"}
                        ></SideNavButton>
                    </div>
                    <div class="botNavSide">
                        <SideNavButton
                            logoPath={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="31"
                                    viewBox="0 0 27 31"
                                    fill="none"
                                >
                                    <path
                                        d="M13.4063 10.5334C12.4239 10.5334 11.4636 10.8247 10.6469 11.3705C9.83007 11.9163 9.19346 12.692 8.81753 13.5995C8.44161 14.5071 8.34325 15.5058 8.53489 16.4692C8.72654 17.4327 9.19958 18.3177 9.8942 19.0123C10.5888 19.707 11.4738 20.18 12.4373 20.3716C13.4008 20.5633 14.3994 20.4649 15.307 20.089C16.2146 19.7131 16.9903 19.0765 17.536 18.2597C18.0818 17.4429 18.3731 16.4826 18.3731 15.5003C18.3731 14.183 17.8498 12.9197 16.9183 11.9882C15.9869 11.0567 14.7236 10.5334 13.4063 10.5334ZM13.4063 17.9837C12.9151 17.9837 12.435 17.838 12.0266 17.5651C11.6182 17.2923 11.2999 16.9044 11.1119 16.4506C10.9239 15.9968 10.8748 15.4975 10.9706 15.0158C11.0664 14.534 11.3029 14.0915 11.6502 13.7442C11.9975 13.3969 12.44 13.1604 12.9218 13.0646C13.4035 12.9688 13.9028 13.0179 14.3566 13.2059C14.8104 13.3939 15.1983 13.7122 15.4712 14.1206C15.744 14.529 15.8897 15.0091 15.8897 15.5003C15.8897 16.1589 15.628 16.7906 15.1623 17.2563C14.6966 17.722 14.0649 17.9837 13.4063 17.9837Z"
                                        fill="#4C4948"
                                    />
                                    <path
                                        d="M24.9467 17.8593L24.3954 17.5414C24.6436 16.191 24.6436 14.8066 24.3954 13.4562L24.9467 13.1383C25.3706 12.8937 25.7423 12.568 26.0404 12.1798C26.3385 11.7916 26.5572 11.3485 26.684 10.8757C26.8108 10.403 26.8433 9.90989 26.7796 9.4246C26.7158 8.9393 26.5571 8.47131 26.3125 8.04735C26.068 7.62339 25.7422 7.25175 25.354 6.95366C24.9658 6.65557 24.5227 6.43687 24.0499 6.31004C23.5772 6.1832 23.0841 6.15072 22.5988 6.21446C22.1135 6.27819 21.6455 6.43688 21.2216 6.68148L20.669 7.00059C19.6254 6.10895 18.4261 5.41773 17.1314 4.96172V4.32472C17.1314 3.33676 16.7389 2.38926 16.0403 1.69067C15.3417 0.992075 14.3942 0.599609 13.4063 0.599609C12.4183 0.599609 11.4708 0.992075 10.7722 1.69067C10.0736 2.38926 9.68116 3.33676 9.68116 4.32472V4.96172C8.38655 5.41937 7.18763 6.11228 6.14479 7.00556L5.58975 6.68396C4.73351 6.18998 3.71612 6.05637 2.76137 6.31252C1.80663 6.56867 0.992741 7.1936 0.49876 8.04983C0.00477943 8.90607 -0.128832 9.92346 0.127319 10.8782C0.383471 11.833 1.0084 12.6468 1.86463 13.1408L2.41595 13.4587C2.16775 14.8091 2.16775 16.1935 2.41595 17.5439L1.86463 17.8618C1.0084 18.3558 0.383471 19.1696 0.127319 20.1244C-0.128832 21.0791 0.00477943 22.0965 0.49876 22.9528C0.992741 23.809 1.80663 24.4339 2.76137 24.6901C3.71612 24.9462 4.73351 24.8126 5.58975 24.3186L6.14231 23.9995C7.18629 24.8913 8.38604 25.5825 9.68116 26.0384V26.6754C9.68116 27.6634 10.0736 28.6109 10.7722 29.3094C11.4708 30.008 12.4183 30.4005 13.4063 30.4005C14.3942 30.4005 15.3417 30.008 16.0403 29.3094C16.7389 28.6109 17.1314 27.6634 17.1314 26.6754V26.0384C18.426 25.5807 19.6249 24.8878 20.6678 23.9946L21.2228 24.3149C22.079 24.8089 23.0964 24.9425 24.0512 24.6864C25.0059 24.4302 25.8198 23.8053 26.3138 22.949C26.8078 22.0928 26.9414 21.0754 26.6852 20.1207C26.4291 19.1659 25.8041 18.352 24.9479 17.8581L24.9467 17.8593ZM21.7828 13.1706C22.2033 14.6943 22.2033 16.3034 21.7828 17.827C21.7094 18.0922 21.7261 18.3743 21.8304 18.6289C21.9347 18.8836 22.1206 19.0963 22.359 19.2339L23.705 20.0112C23.9903 20.1758 24.1986 20.4471 24.2839 20.7653C24.3693 21.0835 24.3247 21.4226 24.1601 21.708C23.9954 21.9933 23.7241 22.2016 23.4059 22.2869C23.0877 22.3723 22.7486 22.3277 22.4633 22.163L21.1148 21.3833C20.8762 21.2451 20.5985 21.1902 20.3254 21.2273C20.0522 21.2644 19.7992 21.3914 19.6061 21.5881C18.5009 22.7164 17.1085 23.5214 15.5793 23.9163C15.3123 23.985 15.0758 24.1404 14.907 24.3583C14.7382 24.5761 14.6466 24.8439 14.6467 25.1195V26.6754C14.6467 27.0047 14.5159 27.3205 14.2831 27.5534C14.0502 27.7863 13.7344 27.9171 13.405 27.9171C13.0757 27.9171 12.7599 27.7863 12.527 27.5534C12.2942 27.3205 12.1633 27.0047 12.1633 26.6754V25.1208C12.1635 24.8452 12.0719 24.5774 11.9031 24.3595C11.7342 24.1417 11.4977 23.9862 11.2308 23.9176C9.70146 23.5211 8.30949 22.7143 7.2052 21.5844C7.01215 21.3876 6.75911 21.2607 6.48595 21.2236C6.2128 21.1865 5.93507 21.2414 5.69653 21.3795L4.35053 22.1581C4.20926 22.2409 4.053 22.295 3.89075 22.3171C3.72851 22.3393 3.56348 22.3292 3.40516 22.2873C3.24684 22.2455 3.09837 22.1727 2.96829 22.0732C2.8382 21.9738 2.72908 21.8496 2.6472 21.7077C2.56532 21.5659 2.5123 21.4093 2.49119 21.2469C2.47009 21.0845 2.48131 20.9196 2.52422 20.7615C2.56712 20.6035 2.64086 20.4555 2.74119 20.3261C2.84153 20.1967 2.96647 20.0884 3.10882 20.0074L4.45483 19.2301C4.69317 19.0926 4.87909 18.8798 4.98337 18.6252C5.08766 18.3705 5.1044 18.0885 5.03098 17.8233C4.61049 16.2996 4.61049 14.6905 5.03098 13.1669C5.10308 12.9023 5.08554 12.6212 4.98108 12.3676C4.87663 12.114 4.69115 11.9021 4.45359 11.765L3.10758 10.9877C2.82222 10.823 2.61397 10.5518 2.52862 10.2336C2.44328 9.91535 2.48784 9.57627 2.6525 9.29092C2.81716 9.00556 3.08843 8.7973 3.40664 8.71196C3.72485 8.62661 4.06393 8.67117 4.34928 8.83583L5.69777 9.61562C5.93566 9.75409 6.21281 9.80959 6.48567 9.7734C6.75853 9.73722 7.01163 9.61139 7.2052 9.41571C8.31043 8.28743 9.7028 7.4824 11.232 7.08751C11.4998 7.01868 11.7369 6.86246 11.9058 6.64361C12.0748 6.42475 12.1658 6.15579 12.1646 5.87933V4.32472C12.1646 3.9954 12.2954 3.67957 12.5283 3.4467C12.7611 3.21384 13.077 3.08302 13.4063 3.08302C13.7356 3.08302 14.0514 3.21384 14.2843 3.4467C14.5172 3.67957 14.648 3.9954 14.648 4.32472V5.87933C14.6478 6.15494 14.7394 6.42276 14.9082 6.6406C15.0771 6.85844 15.3136 7.01392 15.5805 7.08255C17.1103 7.47884 18.5027 8.28561 19.6073 9.41571C19.8004 9.61248 20.0534 9.73941 20.3266 9.77651C20.5997 9.8136 20.8775 9.75875 21.116 9.62059L22.462 8.84204C22.6033 8.75922 22.7595 8.70516 22.9218 8.68298C23.084 8.6608 23.2491 8.67093 23.4074 8.71278C23.5657 8.75464 23.7142 8.8274 23.8443 8.92687C23.9743 9.02634 24.0835 9.15056 24.1653 9.29237C24.2472 9.43419 24.3002 9.5908 24.3214 9.75319C24.3425 9.91558 24.3312 10.0805 24.2883 10.2386C24.2454 10.3966 24.1717 10.5446 24.0714 10.674C23.971 10.8034 23.8461 10.9117 23.7037 10.9927L22.3577 11.77C22.1206 11.9074 21.9356 12.1195 21.8317 12.3731C21.7277 12.6266 21.7105 12.9075 21.7828 13.1719V13.1706Z"
                                        fill="#4C4948"
                                    />
                                </svg>
                            }
                            label={"Settings"}
                        ></SideNavButton>
                        <SideNavButton
                            logoPath={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <path
                                        d="M25.5083 10.34L21.174 6.00578C20.7301 5.57708 20.0227 5.58939 19.594 6.03328C19.1758 6.46628 19.1758 7.15278 19.594 7.58577L23.9283 11.92C24.0571 12.0513 24.1696 12.1977 24.2635 12.3558C24.2468 12.3558 24.2334 12.3469 24.2166 12.3469L6.69181 12.3826C6.07471 12.3826 5.57446 12.8829 5.57446 13.5C5.57446 14.1171 6.07471 14.6173 6.69181 14.6173L24.2099 14.5816C24.2412 14.5816 24.2669 14.5659 24.297 14.5637C24.1979 14.7527 24.0722 14.9266 23.9239 15.0799L19.5896 19.4142C19.1457 19.8429 19.1334 20.5502 19.5621 20.9941C19.9908 21.438 20.6981 21.4503 21.142 21.0216C21.1514 21.0126 21.1605 21.0034 21.1695 20.9941L25.5038 16.6599C27.2486 14.9145 27.2486 12.0853 25.5038 10.34H25.5083Z"
                                        fill="#4C4948"
                                    />
                                    <path
                                        d="M7.82155 24.6736H5.5868C3.7355 24.6736 2.2347 23.1728 2.2347 21.3215V5.6784C2.2347 3.8271 3.7355 2.3263 5.5868 2.3263H7.82155C8.43865 2.3263 8.9389 1.82606 8.9389 1.20895C8.9389 0.591854 8.4387 0.0915527 7.82155 0.0915527H5.5868C2.50287 0.0952715 0.00371874 2.59442 0 5.6784V21.3216C0.00371874 24.4055 2.50287 26.9047 5.58685 26.9084H7.8216C8.4387 26.9084 8.93895 26.4081 8.93895 25.791C8.93895 25.1739 8.4387 24.6736 7.82155 24.6736Z"
                                        fill="#4C4948"
                                    />
                                </svg>
                            }
                            label={"Log Out"}
                        ></SideNavButton>
                    </div>
                </div>
                <div class="main-content">
                    <BarGraph title={"Overall Spending"} />

                    <PieGraph title={"October's Expenses"} />
                </div>
                <div class="bank-account-sidebar">
                    <h2 class="sub-title">Linked Accounts</h2>
                </div>
            </div>
        </div>
    );
}
