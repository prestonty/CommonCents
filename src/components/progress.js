export default function Progress() {
    if (budget < average) {
        return (
            <div>
                {/* INSERT LOGO HERE */}
                <p>INSERT LOGO HERE</p>
                <div>
                    <p>Hello Elizabeth,</p>
                    <p>
                        Great job! You're spending less than usual. Have a
                        cookie!{" "}
                    </p>
                    {/* insert cookie later */}
                </div>
            </div>
        );
    } else if (budget >= average) {
        return (
            <div>
                {/* INSERT LOGO HERE */}
                <p>INSERT LOGO HERE</p>
                <div>
                    <p>Hello Elizabeth,</p>
                    <p>Watch out! You're spending more than usual.</p>
                    {/* insert an emoji later */}
                </div>
            </div>
        );
    }
}
