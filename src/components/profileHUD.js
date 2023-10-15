import "./styles/profileHUD.css";

export default function ProfileHUD() {
    return (
        <div class="profileHUD">
            <div class="profileCalendar">
                <div class="calendarIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M21.4229 2.34582H20.3075V1.23041C20.3075 0.614697 19.8089 0.11499 19.1921 0.11499C18.5752 0.11499 18.0766 0.614697 18.0766 1.23041V2.34582H9.15331V1.23041C9.15331 0.614697 8.65472 0.11499 8.0379 0.11499C7.42107 0.11499 6.92248 0.614697 6.92248 1.23041V2.34582H5.80706C2.73186 2.34582 0.22998 4.8477 0.22998 7.92291V21.3079C0.22998 24.3831 2.73186 26.885 5.80706 26.885H21.4229C24.4981 26.885 27 24.3831 27 21.3079V7.92291C27 4.8477 24.4981 2.34582 21.4229 2.34582ZM5.80706 4.57666H21.4229C23.2678 4.57666 24.7691 6.07801 24.7691 7.92291V9.03832H2.46081V7.92291C2.46081 6.07801 3.96216 4.57666 5.80706 4.57666ZM21.4229 24.6542H5.80706C3.96216 24.6542 2.46081 23.1528 2.46081 21.3079V11.2692H24.7691V21.3079C24.7691 23.1528 23.2678 24.6542 21.4229 24.6542ZM21.4229 15.7308C21.4229 16.3465 20.9243 16.8462 20.3075 16.8462H6.92248C6.30566 16.8462 5.80706 16.3465 5.80706 15.7308C5.80706 15.1151 6.30566 14.6154 6.92248 14.6154H20.3075C20.9243 14.6154 21.4229 15.1151 21.4229 15.7308ZM13.615 20.1925C13.615 20.8082 13.1164 21.3079 12.4996 21.3079H6.92248C6.30566 21.3079 5.80706 20.8082 5.80706 20.1925C5.80706 19.5768 6.30566 19.0771 6.92248 19.0771H12.4996C13.1164 19.0771 13.615 19.5768 13.615 20.1925Z" fill="#4C4948"/>
                    </svg>
                </div>
                <select class="formSelect" id="month" name="month">
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select class="formSelect" id="year" name="year">
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                </select>
            </div>
            <div class="profileNotif">
                <div class="notifIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                        <path d="M23.9112 17.2212L19.6976 24.0969C19.2348 24.8565 18.6049 25.5005 17.8558 25.98C17.1067 26.4595 16.258 26.7618 15.3744 26.8639C15.1416 26.8915 14.9074 26.9053 14.6729 26.9052C13.4726 26.9036 12.3021 26.5309 11.3217 25.8384C10.3085 26.5974 9.05703 26.9684 7.79392 26.8842C6.53081 26.8 5.33964 26.2661 4.43624 25.3793C3.53283 24.4925 2.97695 23.3115 2.86932 22.0502C2.76168 20.7888 3.10941 19.5307 3.84949 18.5036L2.38053 17.0369C1.75328 16.4096 1.27608 15.6485 0.984677 14.8107C0.69327 13.9728 0.595205 13.0799 0.697824 12.1987C0.800444 11.3176 1.10109 10.4711 1.57725 9.72265C2.0534 8.97419 2.69273 8.34315 3.44734 7.8768L9.88956 3.89328C11.6347 2.77483 13.6869 2.23257 15.7568 2.34301C17.8266 2.45344 19.8095 3.211 21.4257 4.50879L23.2789 2.65555C23.382 2.54886 23.5052 2.46376 23.6415 2.40521C23.7778 2.34667 23.9244 2.31585 24.0727 2.31456C24.221 2.31327 24.3681 2.34154 24.5054 2.39771C24.6427 2.45387 24.7674 2.53682 24.8723 2.64171C24.9772 2.74659 25.0602 2.87132 25.1163 3.0086C25.1725 3.14589 25.2008 3.29299 25.1995 3.44131C25.1982 3.58964 25.1674 3.73622 25.1088 3.87251C25.0503 4.0088 24.9652 4.13206 24.8585 4.23511L23.0075 6.08723C24.2489 7.64248 24.9981 9.53279 25.1591 11.5163C25.3201 13.4997 24.8856 15.4861 23.9112 17.2212ZM9.61923 24.2767L5.46479 20.1212C5.14014 20.7018 5.01493 21.3729 5.10835 22.0315C5.20178 22.6901 5.50869 23.2999 5.982 23.7673C6.45947 24.2209 7.06677 24.5138 7.71895 24.6051C8.37112 24.6965 9.03554 24.5816 9.61923 24.2767ZM20.7018 6.8502C19.4613 5.59777 17.8284 4.80932 16.0762 4.61675C14.324 4.42418 12.5588 4.83918 11.0759 5.79232L4.62251 9.77584C4.1545 10.0651 3.758 10.4566 3.46271 10.9208C3.16742 11.385 2.98098 11.9101 2.91737 12.4566C2.85376 13.0031 2.91461 13.5569 3.09538 14.0766C3.27615 14.5963 3.57214 15.0683 3.9612 15.4573L12.1047 23.602C12.4944 23.9921 12.9675 24.2888 13.4883 24.4697C14.0092 24.6507 14.5643 24.7112 15.1119 24.6467C15.6596 24.5821 16.1854 24.3943 16.65 24.0973C17.1145 23.8002 17.5057 23.4017 17.794 22.9317L21.9887 16.0896C22.808 14.6181 23.1256 12.9197 22.8934 11.2516C22.6612 9.58349 21.8918 8.03643 20.7018 6.84462V6.8502ZM22.1306 26.9052C21.8946 26.9056 21.6647 26.8314 21.4735 26.693C21.2824 26.5547 21.14 26.3594 21.0667 26.1352C20.9934 25.911 20.993 25.6693 21.0655 25.4448C21.138 25.2203 21.2797 25.0245 21.4704 24.8855C23.4264 23.4149 24.7502 21.2557 25.1735 18.8454C25.2032 18.7003 25.2614 18.5626 25.3448 18.4402C25.4282 18.3178 25.5351 18.2133 25.6593 18.1326C25.7835 18.0519 25.9225 17.9967 26.0682 17.9702C26.2139 17.9438 26.3635 17.9465 26.5081 17.9784C26.6527 18.0102 26.7896 18.0705 26.9107 18.1557C27.0319 18.241 27.1348 18.3494 27.2136 18.4748C27.2925 18.6002 27.3456 18.74 27.3699 18.8861C27.3942 19.0322 27.3892 19.1816 27.3552 19.3258C26.8078 22.2656 25.1784 24.8934 22.7885 26.6907C22.5974 26.8301 22.3671 26.9052 22.1306 26.9052ZM1.72703 6.50614C1.52071 6.50522 1.31867 6.44718 1.14333 6.33845C0.967976 6.22972 0.826165 6.07455 0.733616 5.89015C0.641068 5.70574 0.601398 5.49931 0.619005 5.29374C0.636612 5.08817 0.710808 4.89149 0.833367 4.72551C2.65531 2.29092 5.33724 0.642929 8.33235 0.11754C8.62269 0.0582864 8.92468 0.116798 9.17188 0.280203C9.41909 0.443608 9.59125 0.698522 9.65051 0.988865C9.70976 1.27921 9.65125 1.5812 9.48784 1.8284C9.32444 2.0756 9.06952 2.24777 8.77918 2.30702C6.31934 2.71322 4.11227 4.05596 2.6207 6.05372C2.51723 6.19349 2.38257 6.30717 2.22742 6.38571C2.07227 6.46425 1.90093 6.50549 1.72703 6.50614Z" fill="#4C4948"/>
                    </svg>
                </div>
            </div>
            <div class="profileCard">
                <div class="profileIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="51" viewBox="0 0 52 51" fill="none">
                        <path d="M25.5 33C16.7 33 14.5 41.6667 14.5 46C14.5 50.5 37.5 50.5 37.5 46C37.5 41.5 36.5 33 25.5 33Z" fill="#F5F5F5"/>
                        <path d="M33 19.5C33 13.5 28.3333 12 26 12C23.6667 12.3333 19 14.3 19 19.5C19 24.7 23.6667 26.3333 26 26.5C28.3333 26.6667 33 25.5 33 19.5Z" fill="#F5F5F5"/>
                        <path d="M26 0.5C12.2146 0.5 1 11.7146 1 25.5C1 39.2854 12.2146 50.5 26 50.5C39.7854 50.5 51 39.2854 51 25.5C51 11.7146 39.7854 0.5 26 0.5ZM15.5833 45.9104V44.25C15.5833 38.5062 20.2563 33.8333 26 33.8333C31.7437 33.8333 36.4167 38.5062 36.4167 44.25V45.9104C33.2896 47.5125 29.7479 48.4167 26 48.4167C22.2521 48.4167 18.7104 47.5125 15.5833 45.9104ZM38.5 44.6979V44.25C38.5 37.3563 32.8937 31.75 26 31.75C19.1063 31.75 13.5 37.3563 13.5 44.25V44.6979C7.23333 40.6042 3.08333 33.5271 3.08333 25.5C3.08333 12.8646 13.3646 2.58333 26 2.58333C38.6354 2.58333 48.9167 12.8646 48.9167 25.5C48.9167 33.5271 44.7667 40.6042 38.5 44.6979ZM26 10.9167C21.4042 10.9167 17.6667 14.6542 17.6667 19.25C17.6667 23.8458 21.4042 27.5833 26 27.5833C30.5958 27.5833 34.3333 23.8458 34.3333 19.25C34.3333 14.6542 30.5958 10.9167 26 10.9167ZM26 25.5C22.5542 25.5 19.75 22.6958 19.75 19.25C19.75 15.8042 22.5542 13 26 13C29.4458 13 32.25 15.8042 32.25 19.25C32.25 22.6958 29.4458 25.5 26 25.5Z" fill="#4C4948"/>
                        <path d="M25.5 33C16.7 33 14.5 41.6667 14.5 46C14.5 50.5 37.5 50.5 37.5 46C37.5 41.5 36.5 33 25.5 33Z" stroke="#4C4948" stroke-width="0.5"/>
                        <path d="M33 19.5C33 13.5 28.3333 12 26 12C23.6667 12.3333 19 14.3 19 19.5C19 24.7 23.6667 26.3333 26 26.5C28.3333 26.6667 33 25.5 33 19.5Z" stroke="#4C4948" stroke-width="0.5"/>
                        <path d="M26 0.5C12.2146 0.5 1 11.7146 1 25.5C1 39.2854 12.2146 50.5 26 50.5C39.7854 50.5 51 39.2854 51 25.5C51 11.7146 39.7854 0.5 26 0.5ZM15.5833 45.9104V44.25C15.5833 38.5062 20.2563 33.8333 26 33.8333C31.7437 33.8333 36.4167 38.5062 36.4167 44.25V45.9104C33.2896 47.5125 29.7479 48.4167 26 48.4167C22.2521 48.4167 18.7104 47.5125 15.5833 45.9104ZM38.5 44.6979V44.25C38.5 37.3563 32.8937 31.75 26 31.75C19.1063 31.75 13.5 37.3563 13.5 44.25V44.6979C7.23333 40.6042 3.08333 33.5271 3.08333 25.5C3.08333 12.8646 13.3646 2.58333 26 2.58333C38.6354 2.58333 48.9167 12.8646 48.9167 25.5C48.9167 33.5271 44.7667 40.6042 38.5 44.6979ZM26 10.9167C21.4042 10.9167 17.6667 14.6542 17.6667 19.25C17.6667 23.8458 21.4042 27.5833 26 27.5833C30.5958 27.5833 34.3333 23.8458 34.3333 19.25C34.3333 14.6542 30.5958 10.9167 26 10.9167ZM26 25.5C22.5542 25.5 19.75 22.6958 19.75 19.25C19.75 15.8042 22.5542 13 26 13C29.4458 13 32.25 15.8042 32.25 19.25C32.25 22.6958 29.4458 25.5 26 25.5Z" stroke="#4C4948" stroke-width="0.5"/>
                    </svg>
                </div>
                <div class="profileCardText">
                    <p>Elizabeth Zhang</p>
                    <p>elizabethjpzhang@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
