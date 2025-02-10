import { Outlet, Link } from "react-router-dom";
import style from '../src/index.module.css'
import Logo from '../src/assets/logo.png'
import { useEffect } from "react";


const Index = () => {


    return (
        <>
        <header>
        <img className="didlydoo" src={Logo} alt="logo Didlydoo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events/:id">Event</Link>
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
            </header>
        </>
    )
};

export default Index;