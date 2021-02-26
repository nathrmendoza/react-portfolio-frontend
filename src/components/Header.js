import Navbar from './Navbar';
import Socials from './Socials';

const Header = ({tch}) => {

    const getColor = () => {
        if (tch >= 0 && tch < 12) 
            return "#3e3e3e";
        else
            return "#ffffff";
    }

    return (
        <header>
            <nav className="nav-header">
                <Navbar tch={tch}/>
                <span className="burg" onClick={burgClick}>
                    <i></i><i></i><i></i>
                </span>
                <span className="notif">Click here to see more!</span>
            </nav>
            <div id="nath-title" style={{color: getColor()}}>Nath Mendo.</div>
            <Socials itu="socials-header"/>
        </header>
    )
}

//toggle nav
const burgClick = e => {
    let notif = document.querySelector('.notif');
    console.log(notif);
    e.preventDefault();

    if(!notif.classList.contains('inactive')) {
        notif.classList.add('inactive');
    }

    if(!e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.classList.add('active');
    }else {
        e.target.parentElement.classList.remove('active');
    }
    
}

export default Header
