import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Fun from './pages/Fun';

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/about', component: <About /> },
    { path: '/work', component: <Work /> },
    { path: '/funfacts', component: <Fun /> },
    { path: '/contact', component: <Contact /> },
];

export default routes;
