import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/about', component: <About /> },
    { path: '/work', component: <Work /> },
    { path: '/contact', component: <Contact /> },
];

export default routes;
