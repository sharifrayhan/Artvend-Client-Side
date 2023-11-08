import Booking from "../Booking/Booking";
import Pending from "../Pending/Pending";
import {Helmet} from "react-helmet";

const MySchedules = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Artvend | My Schedules</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Booking></Booking>
            <Pending></Pending>
        </div>
    );
};

export default MySchedules;