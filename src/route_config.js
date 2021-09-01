import Home from './pages/home';
import Contact from './pages/contact';

export const routes = [
    {
        name: 'Home',
        component: <Home />,
        path: ['/', '/home']
    },
    {
        name: 'Contact Me',
        component: <Contact />,
        path: '/contact'
    },
];