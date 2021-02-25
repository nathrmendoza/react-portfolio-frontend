import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const Socials = ({itu}) => {
    return (
        
        <div id={itu}>
            <a href="https://www.facebook.com/neil328/" target="_blank" rel="noreferrer" className="fb-soc"><FaFacebookF /></a>
            <a href="https://twitter.com/nath_ronquilloM" target="_blank" rel="noreferrer" className="tw-soc"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/nathaniel-mendoza-425203163/" target="_blank" rel="noreferrer" className="li-soc"><FaLinkedinIn /></a>
        </div>
    )
}

export default Socials
