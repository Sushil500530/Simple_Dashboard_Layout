import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/dashboard/about/About';
import Service from '../pages/dashboard/service/Service';
import Home from '../pages/home/Home';
import Blog from '../pages/dashboard/blog/Blog';
import Contact from '../pages/dashboard/contact/Contact';
import More from '../pages/dashboard/other/More';

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
            },
            {
                path:'blog',
                element: <Blog />
            },
            {
                path:'contact',
                element: <Contact />
            },
            {
                path:'more',
                element: <More />
            },
            {
                path:"admin/overview",
                element: <div className='w-full text-center my-5 font-bold text-2xl'>Admin Overvies page</div>
            },
            {
                path:"admin/users",
                element: <div className='w-full text-center my-5 font-bold text-2xl'>User section page</div>
            },
            {
                path:"admin/reports/performance",
                element: <div className='w-full text-center my-5 font-bold text-2xl'>Report performance page</div>
            },
            {
                path:"admin/settings/profile",
                element: <div className='w-full text-center my-5 font-bold text-2xl'>Profile Settings page</div>
            },
            
        ]
    }
])

export default router;