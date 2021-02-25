import React from 'react' ;
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({tch}) => {
    const currLoc = useLocation().pathname;

    const colorScheme = () => {  
        if (tch >= 0 && tch < 12) 
            return "morning";
        else if (tch >= 12 && tch < 18)
            return "afternoon";
        else
            return "evening"; 
    }

    return (
        <div className={"nav-wrapper " + colorScheme()}>
            <Link to="/" className={currLoc === "/" ? "active" : ""}>Home</Link>
            <Link to="/projects" className={currLoc === "/projects" ? "active" : ""}>Projects</Link>
            <Link to="/contact-me" className={currLoc === "/contact-me" ? "active" : ""}>Contact Me</Link>
        </div>
    )
}

export default Navbar
