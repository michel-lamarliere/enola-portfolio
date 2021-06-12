import { useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/_pages/Home';
import Portfolio from './components/_pages/Portfolio';
import About from './components/_pages/About';
import Error from './components/_pages/Error';
import Legal from './components/_pages/Legal';
import Contact from './components/_pages/Contact';
import ThankYou from './components/_pages/ThankYou';
import Services from './components/_pages/Services';
import Project from './components/portfolio/Project';
import { LanguageProvider } from './translations/LanguageContext.js';

function App() {

  	return (
        <LanguageProvider>
    		<BrowserRouter>
    			<Header />
    			<Switch>
    				<Route exact path='/' component={Home} />
    				<Route exact path='/portfolio' component={Portfolio} />
    				<Route path='/portfolio/:id' component={Project} />
    				<Route path='/about' component={About} />
    				<Route path='/services' component={Services} />
    				<Route path='/contact' component={Contact} />
    				<Route path='/thankyou' component={ThankYou} />
    				<Route path='*' component={Error} />
    				<Route path='/legal' component={Legal} />
    			</Switch>
    			<Footer />
    		</BrowserRouter>
        </LanguageProvider>
  	);
}

export default App;
