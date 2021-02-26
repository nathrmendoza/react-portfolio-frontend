//styles
import './assets/main.css';

//routes
import Main from './routes/Main';
import Projects from './routes/Projects';
import ContactMe from './routes/ContactMe';

//components
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //get time to set color theme
  let time = 1;

  return (
    <>
    <Router>
    <Header tch={time}/>

      <Route path="/" exact render={(props) => (<Main {...props} tch={time}/>)}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact-me" exact component={ContactMe}/>

    </Router>
    <Footer />
    </>
  );
}

export default App;
