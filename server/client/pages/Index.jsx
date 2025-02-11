import { Outlet, Link } from "react-router-dom";
import style from '../src/index.module.css'
import Logo from '../src/assets/logo4.png'
import { useEffect } from "react";
import Squares from "../src/Reactbits/Backgrounds/Squares/Squares.jsx";


const Index = () => {


    return (
        <>
          <Squares
                speed={0.5}
                squareSize={40}
                direction='down' // up, down, left, right, diagonal
                borderColor='#fff'
                hoverFillColor='#222'
            />
        <header>
        <img className={style.didlydoo} src={Logo} alt="logo Didlydoo" />
            <nav className="link">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events/:id">Event</Link>
                    </li>
                    <li>
                        <Link to="/editEvent">AddEvent</Link>
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