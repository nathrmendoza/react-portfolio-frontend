import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Parallax} from 'react-parallax'

//components
import Background from '../components/Background'
import Skills from '../components/Skills'

const Main = ({tch}) => {
    
    const [backgroundToUse, backgroundUpdate] = useState([]);
    const [skillsData, skillsUpdate] = useState([]);

    useEffect (() => {
        let time = new Date().getHours();

        //background
        axios.get(`http://localhost:1337/main-page`).then(res => {
            if (time >= 0 && time < 12) {
                backgroundUpdate(res.data.morningbg.url);
            }else if (time >= 12 && time < 18) {
                backgroundUpdate(res.data.afternoonbg.url);
            }else {
                backgroundUpdate(res.data.eveningbg.url);
            }
        });
        
        //skills data
        axios.get(`http://localhost:1337/skills`).then(res => skillsUpdate(res.data));

    }, []);

    //greeting
    const greetMessage = () => {
        if (tch >= 0 && tch < 12) 
            return "Good Morning⛅";
        else if (tch >= 12 && tch < 18)
            return "Good Afternoon🌤️";
        else
            return "Good Evening🌙";
    }

    //theme color for page
    const pageColor = () => {
        if (tch >= 0 && tch < 12) 
            return {backgroundColor : "#21062F", color : "white"};
        else if (tch >= 12 && tch < 18)
            return {backgroundColor : "#2E112D", color : "white"};
        else
            return {backgroundColor : "#171F2C", color : "white"};
    }

    //render
    return (
        <main>
            <section className="hero-start">

                <Parallax bgImage={`http://localhost:1337${backgroundToUse}`} strength={250}>
                    <article className="hero-content">
                        <div className="hero-content-wrap">
                            <div className="pic-wrap"><img src={process.env.PUBLIC_URL + 'images/pic-of-me.jpg'} alt="test"/></div>
                            <h2>{greetMessage()}</h2>
                            <h6>I'm Nath, A front-end web developer</h6>
                            <p>Heya, I see you're visiting my portfolio. Do check around this page to see the summary of who I am. Also, don't forget to check 
                                out my <Link to="/projects">Projects</Link> page to see what I've accomplished through the length of my field.</p>
                        </div>
                    </article>
                </Parallax>
            </section>
            <section className="page-wrapper" style={pageColor()}>
                <Background />
                <Skills skills_data={skillsData}/>
            </section>
        </main>
    )

}

export default Main
