import { FcBrokenLink } from "react-icons/fc";
import { MdDashboard, MdSettings } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const SMenubar = () => {
    const linkMenus = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
        { name: 'Service', path: '/service' },
        { name: 'More', path: '/more' },
        // Add more menu items as needed...
    ]
    return (
        <div>
            <div className="bg-transparent text-black hidden lg:block z-10 hover:w-auto ">
                <div className="flex flex-col items-start justify-center">
                    <div className="  z-10 bg-base-200  transition-all ease-in-out duration-300">
                        <div role="button" className="btn ">
                            {/* icon  */}
                           <MdDashboard className="w-6 h-6" />
                        </div>
                        <ul className="top-3 left-16  py-2 px-5 shadow bg-gray-300 text-black w-52 transition-all ease-in-out duration-300">
                            {
                                linkMenus?.map((menu, index) => (
                                    <div key={index} className=" transition-all ease-in-out duration-300">
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="z-10 bg-base-200">
                        <div role="button" className="btn ">
                           {/* icon  */}
                           <MdSettings className="w-6 h-6" />
                        </div>
                        <ul className="top-3 left-16  py-2 px-5 shadow w-52 bg-white">
                            <Link to="/blog"><li><a>Blog</a></li></Link>
                            <Link to="/service"><li><a>Service</a></li></Link>
                            <Link to="/more"><li><a>More</a></li></Link>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SMenubar;