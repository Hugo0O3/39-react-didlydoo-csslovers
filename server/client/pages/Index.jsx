import { Outlet, Link } from "react-router-dom";

const Index = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/event">Event</Link>
                    </li>
                    <li>
                        <Link to="/editEvent">EditEvent</Link>
                    </li>
                    <li>
                        <Link to="/attendees">Attendees</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Index;