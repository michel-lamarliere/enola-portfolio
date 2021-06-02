import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Legal from './components/pages/Legal';
import Contact from './components/pages/Contact';
import ThankYou from './components/pages/ThankYou';
import Services from './components/pages/Services';

function App() {
  	return (
		<BrowserRouter >
			<Header />
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/portfolio'>
				<Portfolio />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/services'>
				<Services />
			</Route>
			<Route path='/contact'>
				<Contact />
			</Route>
			<Route path='/thankyou'>
				<ThankYou />
			</Route>
			<Route path='/error'>
				<Error />
			</Route>
			<Route path='/legal'>
				<Legal />
			</Route>
			<Footer />
		</BrowserRouter>
  	);
}

export default App;
