import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import AccordionMenu from "../reuseable/accordion-menu";
import AccordionLink from "../reuseable/accordion-link";
import { dashboardData } from "../../data/menu-items";
import { RiMenu3Line } from "react-icons/ri";
import { IconMenubar } from "./dashboar-manu/IconMenubar";
import { FcBrokenLink } from "react-icons/fc";
import { MenubarContent } from "./dashboar-manu/Menubar";
import { MdMenu } from "react-icons/md";

export function DashbaordLayout() {

    const [isActiveIconContent, setIsActiveIconContent] = useState(false);
    const [isClicked, setIsClicked] = useState(false)

    const handleToggleLeft = () => {
        setIsActiveIconContent(!isActiveIconContent);
        setIsClicked(false)
    };

    console.log("clicked :", isClicked)

    return (
        <div className="relative min-h-screen z-50">
            {/* Sidebar */}
            <div
                id="sidebar"
                className={`fixed bg-[#000000] text-[#64748B] shadow-xl min-h-screen inset-y-0 z-[999] left-0 transform group
                 ${isActiveIconContent ? "w-[70px] overflow-hidden hover:w-64 -translate-x-full lg:translate-x-0" : "w-64"} transition-all duration-200 px-2`}
            >
                <FcBrokenLink className="text-3xl relative left-1 w-full h-10 my-5 border-b" />
                <div onClick={() => setIsActiveIconContent(false)} className={`${isClicked && "w-full lg:w-64"} `}>
                    {
                        isActiveIconContent ?
                            <>
                                <span className="block group-hover:hidden">
                                    <IconMenubar />
                                </span>
                                <span onClick={() => setIsClicked(true)} className="hidden group-hover:block">
                                    <MenubarContent
                                        handleToggleLeft={handleToggleLeft}
                                        isActiveIconContent={isActiveIconContent}
                                    />
                                </span>
                            </>
                            :
                            <span className="group-hover:block">
                                <MenubarContent
                                    handleToggleLeft={handleToggleLeft}
                                />
                            </span>
                    }

                </div>
            </div>

            {/* Top navigation bar */}
            <div className={`fixed top-0  bg-green-800 text-white right-0 flex items-center justify-between h-16 z-50   
                    ${isActiveIconContent ? 'w-full lg:w-[calc(100%-70px)]' : 'w-full lg:w-[calc(100%-256px)]'}
                    transition-all duration-200 float-right px-5 shadow`}>
                <div className="w-auto h-full flex items-center justify-center">
                    <button className="text-white border-e border-e-gray-300 w-16 h-full text-center lg:hidden block">
                        <FcBrokenLink className="text-3xl relative left-1" />
                    </button>
                    <button
                        className="text-white cursor-pointer p-2 rounded-md"
                        onClick={handleToggleLeft}
                    >
                        <MdMenu className="text-3xl" />
                    </button>
                </div>
                <div>
                    User Profile
                </div>
            </div>

            {/* Main content area */}
            {/* onClick={()=>setIsActive(true)} */}
            <span >
                <div className={` 
                ${isActiveIconContent ? 'w-full lg:w-[calc(100%-70px)]' : 'w-full lg:w-[calc(100%-256px)]'} 
                pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5 relative z-[-1] min-h-screen`}>
                    <Outlet />
                </div>
            </span>

        </div>
    );
};