import { useState } from "react";
import { FcBrokenLink } from "react-icons/fc";
import { MdMenu } from "react-icons/md";
import { Outlet } from 'react-router-dom';
import { MenuLinks } from "../shared/menu/MenuLinks"
import LMenubar from "../../header/navbar/dashboar-manu/LMenubar";
import SMenubar from "../../header/navbar/dashboar-manu/SMenubar";



const DashbaordLayout = () => {
    const [isActive, setIsActive] = useState(false);

    console.log(MenuLinks);
    const handleToggleLeft = () => {
        setIsActive(!isActive);
    };
    // className={` z-10 fixed pt-3 bg-blue-50 text-[#64748B]  mt-16 shadow-xl border overflow-y-auto w-64 h-screen px-0 inset-y-0 left-0 transform lg:hidden
    // ${isActive && " transition-all duration-200 -translate-x-full"
    //     } transition-all duration-200 px-5`}
    return (
        <div>
            <div className="relative">
                <div
                    className={` z-10 fixed bg-gray-500 text-[#64748B] shadow-xl overflow-y-auto min-h-screen inset-y-0 left-0 transform 
                 ${isActive ? "w-[70px] transition-all duration-200 -translate-x-full lg:translate-x-0" : "w-64 transition-all duration-200 ease-in-out bg-gray-500"
                        } transition-all duration-200 px-2`}
                // className={`
                // z-10 fixed pt-3 overflow-y-auto min-h-screen px-2 inset-y-0 left-0 transform 
                //     ${isActive ? 'w-[70px] overflow-hidden bg-transparent hover:w-72 hover:bg-transparent lg:translate-x-0 transition-all duration-200 -translate-x-full ease-in-out hidden md:hidden lg:block'
                //         : 'w-64 transition-all duration-200 ease-in-out bg-gray-500'}
                //       transition-all duration-200 ease-in-out mt-16 lg:mt-0 
                //       `}
                >
                    <FcBrokenLink className="text-3xl relative left-1 w-full h-10 my-5 border-b" />
                    {
                        isActive ? <SMenubar /> : <LMenubar />
                    }
                </div>
                <div className={`
                z-30 fixed top-0 bg-green-800 text-white right-0  flex items-center justify-between h-16  
                    ${isActive ? 'w-full lg:w-[calc(100%-70px)] transition-all duration-200 ease-in-out'
                        : ' w-full lg:w-[calc(100%-256px)] transition-all duration-200 ease-in-out'}
                     transition-all duration-200 ease-in-out float-right px-5 shadow
                     `}>
                    <div
                        className="w-auto h-full flex items-center justify-center"
                    >
                        {/* icon  or logo */}
                        <button
                            className=" text-white border-e border-e-gray-300 w-16 h-full text-center lg:hidden block"
                        >
                            <FcBrokenLink className="text-3xl relative left-1" />
                        </button>
                        {/* menu button icon  */}
                        <button
                            className=" text-white cursor-pointer p-2 rounded-md"
                            onClick={handleToggleLeft}
                        >
                            <MdMenu className="text-3xl" />
                        </button>
                    </div>
                    <div>
                        user Profile
                    </div>

                </div>
            </div>
            {/* <RxCross1 className="text-4xl text-red-500 cursor-pointer" /> */}
            <div className={`
                ${isActive ? 'w-full lg:w-[calc(100%-70px)]'
                    : ' w-full lg:w-[calc(100%-256px)]'}
                  pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5
                  `}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashbaordLayout;