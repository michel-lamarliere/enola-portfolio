import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Loading from './components/UI/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const About = React.lazy(() => import('./pages/About'));
const Error = React.lazy(() => import('./pages/Error'));
const Legal = React.lazy(() => import('./pages/Legal'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ThankYou = React.lazy(() => import('./pages/ThankYou'));
const Services = React.lazy(() => import('./pages/Services'));
const Project = React.lazy(() => import('./pages/Project'));

function App() {
  	return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={
                    <Loading />
                }>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/portfolio/:id'>
                        <Project />
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
                    <Route path='/legal'>
                        <Legal />
                    </Route>
                    <Route path='*'>
                        <Error />
                    </Route>
                </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
  	);
}

export default App;
