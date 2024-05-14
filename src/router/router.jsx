import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/dashboard/about/About';
import Service from '../pages/dashboard/service/Service';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'service',
                element: <Service />
            }
        ]
    }
])

export default router;