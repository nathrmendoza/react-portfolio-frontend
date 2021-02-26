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
        let time = 1;

        //background
        axios.get(`https://nath-port-strapi.herokuapp.com/main-page`).then(res => {
            if (time >= 0 && time < 12) {
                backgroundUpdate(res.data.morningbg.url);
            }else if (time >= 12 && time < 18) {
                backgroundUpdate(res.data.afternoonbg.url);
            }else {
                backgroundUpdate(res.data.eveningbg.url);
            }
        });
        
        //skills data
        axios.get(`https://nath-port-strapi.herokuapp.com/skills`).then(res => skillsUpdate(res.data));

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
            return {backgroundColor : "#244e66", color : "white"};
        else if (tch >= 12 && tch < 18)
            return {backgroundColor : "#290012", color : "white"};
        else
            return {backgroundColor : "#00070f", color : "white"};
    }

    //render
    return (
        <main>
            <section className="hero-start">

                <Parallax bgImage={`https://nath-port-strapi.herokuapp.com${backgroundToUse}`} strength={200}>
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
                
                <Parallax className="section-break" bgImage={`https://nath-port-strapi.herokuapp.com${backgroundToUse}`} strength={500}/>
            </section>
        </main>
    )

}

export default Main
