import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Error from './pages/Error';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Services from './pages/Services';
import Project from './components/Portfolio/Project';
import { LanguageProvider } from './store/LanguageContext.js';

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
                    <Route path='/legal' component={Legal} />
                    <Route path='*' component={Error} />
    			</Switch>
    			<Footer />
    		</BrowserRouter>
        </LanguageProvider>
  	);
}

export default App;
