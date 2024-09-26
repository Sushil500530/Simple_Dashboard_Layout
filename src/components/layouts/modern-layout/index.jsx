import React, { useEffect, useState } from 'react'
import { FcBrokenLink } from 'react-icons/fc';
import { IconMenubar } from '../dashboar-manu/IconMenubar';
import { MenubarContent } from '../dashboar-manu/Menubar';
import { MdMenu } from 'react-icons/md';
import { Outlet } from 'react-router-dom';

export default function ModernDashboardLayout() {
  
    const [isActiveIconContent, setIsActiveIconContent] = useState(false);

    const handleToggleLeft = () => {
        setIsActiveIconContent(!isActiveIconContent);
    };

 
    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && !sidebar.contains(event.target)) {
                setActiveMenuIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative min-h-screen z-50">
            {/* Sidebar */}
            <div
                id="sidebar"
                className={`fixed bg-[#000000] text-[#64748B] shadow-xl min-h-screen inset-y-0 left-0 transform 
                 ${isActiveIconContent ? "w-[70px] -translate-x-full lg:translate-x-0" : "w-64"} transition-all duration-200 px-2`}
            >
                <FcBrokenLink className="text-3xl relative left-1 w-full h-10 my-5 border-b" />
                {
                    isActiveIconContent ?
                        <IconMenubar />
                        :
                        <MenubarContent
                         handleToggleLeft={handleToggleLeft} 
                         />
                }
            </div>

            {/* Top navigation bar */}
            <div className={`fixed top-0 bg-green-800 text-white right-0 flex items-center justify-between h-16 z-[999]  
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
            <div onClick={()=>setIsActiveIconContent(true)} className={` 
                ${isActiveIconContent ? 'w-full lg:w-[calc(100%-70px)]' : 'w-full lg:w-[calc(100%-256px)]'} 
                pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5 relative z-[-1] min-h-screen`}>
                <Outlet />
            </div>
        </div>
    );
};