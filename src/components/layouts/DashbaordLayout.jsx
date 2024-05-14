import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FcBrokenLink } from "react-icons/fc";
import { MdMenu } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
const DashbaordLayout = () => {
    const [isActive, setIsActive] = useState(false);


    const handleToggleLeft = () => {
        setIsActive(!isActive);
    };
    return (
        <div>
            <div className="relative">
                <div className={`z-10 fixed pt-3 overflow-y-auto min-h-screen px-2 inset-y-0 left-0 transform ${isActive ? 'w-20 overflow-hidden bg-transparent hover:w-72 hover:bg-transparent translate-x-0 transition-all duration-200 ease-in-out hidden md:hidden lg:block' : 'w-64 transition-all duration-200 ease-in-out bg-white'} transition-all duration-200 ease-in-out mt-16 lg:mt-0 `}>
                    <h1 className="my-5"> Logo</h1>
                    {
                        isActive ? <div className="bg-transparent text-black hidden lg:block z-10 hover:w-auto ">
                            <div className="flex flex-col items-start justify-center">
                                <div className="dropdown dropdown-hover z-10 hover:w-64 bg-base-200">
                                    <div tabIndex={0} role="button" className="btn "><RxCross1 /></div>
                                    <ul tabIndex={0} className="dropdown-content top-0 left-12  py-2 px-5 shadow bg-white text-black w-52">
                                        <Link to="/"><li><a>Home</a></li></Link>
                                        <Link to="/about"><li><a>About</a></li></Link>
                                        <Link to="/contact"><li><a>Contact</a></li></Link>
                                        <Link to="/blog"><li><a>Blog</a></li></Link>
                                        <Link to="/service"><li><a>Service</a></li></Link>
                                        <Link to="/more"><li><a>More</a></li></Link>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover z-10 hover:w-64 bg-base-200">
                                    <div tabIndex={0} role="button" className="btn "><RxCross1 /></div>
                                    <ul tabIndex={0} className="dropdown-content top-0 left-12 py-2 px-5 shadow w-52 bg-white">
                                        <Link to="/blog"><li><a>Blog</a></li></Link>
                                        <Link to="/service"><li><a>Service</a></li></Link>
                                        <Link to="/more"><li><a>More</a></li></Link>
                                    </ul>
                                </div>
                            </div>


                        </div> : <div className="bg-black text-white ">
                            Long manubar
                        </div>
                    }
                </div>
                <div className={`z-30 fixed top-0 bg-green-800 text-white right-0  flex items-center justify-between h-16  ${isActive ? 'w-full lg:w-[calc(100%-80px)] transition-all duration-200 ease-in-out' : ' w-full lg:w-[calc(100%-256px)] transition-all duration-200 ease-in-out'} transition-all duration-200 ease-in-out float-right px-5 shadow`}>
                    <div className="w-auto h-full flex items-center justify-center">
                        <button className=" text-white border-e border-e-gray-300 w-16 h-full text-center lg:hidden block"><FcBrokenLink className="text-3xl relative left-1" /></button>
                        <button className=" text-white cursor-pointer p-2 rounded-md" onClick={handleToggleLeft}><MdMenu className="text-3xl" /></button>
                    </div>
                    <div>
                        user Profile
                    </div>

                </div>
            </div>
            {/* <RxCross1 className="text-4xl text-red-500 cursor-pointer" /> */}
            <div onClick={() => setIsActive(true)} className={`text-justify ${isActive ? 'w-full lg:w-[calc(100%-80px)]' : ' w-full lg:w-[calc(100%-256px)]'} pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashbaordLayout;