import { useState, useEffect } from "react";
import { FcBrokenLink } from "react-icons/fc";
import { MdMenu, MdStar } from "react-icons/md";
import { Outlet, Link } from 'react-router-dom';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { dashboardData } from "../../data/menu-items";
import AccordionLink from "../reuseable/accordion-link";
import AccordionMenu from "../reuseable/accordion-menu";

const DashbaordLayout = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActiveIconContent, setIsActiveIconContent] = useState(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Track which menu is active
    const [openAccordion, setOpenAccordion] = useState(null);

    const linkMenus = [
        {
            title: 'Overview',
            path: '/settings',
            icon: <MdStar />,
        },
        {
            title: 'Home',
            path: '/',
            icon: <MdDashboard />,
            subTitle: [
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
                { title: 'Blog', path: '/blog' },
                { title: 'Service', path: '/service' },
                { title: 'More', path: '/more' },
            ],
        },
        {
            title: 'Settings',
            path: '/settings',
            icon: <MdSettings />,
            subTitle: [
                { title: 'Profile', path: '/profile' },
                { title: 'Account', path: '/account' },
                { title: 'Privacy', path: '/privacy' },
            ],
        },

    ];

    const handleToggleLeft = () => {
        setIsActiveIconContent(!isActiveIconContent);
    };

    const toggleSubMenu = (index) => {
        // Toggle submenu visibility
        setActiveMenuIndex(activeMenuIndex === index ? null : index);
    };
    const handleToggle = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
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
                    isActiveIconContent ? <div className="bg-transparent text-black hidden lg:block">
                        <div className="flex flex-col items-start justify-center">
                            {linkMenus.map((menu, index) => (
                                <div key={index} className="relative w-full">
                                    <div
                                        role="button"
                                        className="btn flex items-center justify-center w-full"
                                        onClick={() => toggleSubMenu(index)}
                                    >
                                        {menu.icon}
                                    </div>
                                    {activeMenuIndex === index && (
                                        <div className={`${menu?.subTitle?.length > 0 && "absolute left-16 top-0 w-48 bg-white shadow-lg rounded z-50 p-3"}`}>
                                            <ul className="space-y-2">
                                                {menu?.subTitle?.length > 0 && menu?.subTitle?.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to={subItem.path} className="text-blue-500 hover:underline">
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div> 
                    : 
                    <div className="common-flex flex-col
                     gap-1">
                        {dashboardData?.length > 0 && dashboardData.map((item) => (
                            item?.subMenu ? (
                                <AccordionMenu
                                    key={item?.id}
                                    icon={item?.icon}
                                    title={item?.title}
                                    isOpen={openAccordion === item?.id}
                                    onToggle={() => handleToggle(item?.id)}
                                >
                                    {item?.subMenu.map((subItem, index) => (
                                        <AccordionLink
                                            key={index}
                                            pathName={subItem?.href}
                                            linkTitle={subItem?.title}
                                            handleClick={handleToggleLeft}
                                        />
                                    ))}
                                </AccordionMenu>
                            ) : (
                                <AccordionLink
                                    pathName={item?.href}
                                    linkTitle={item?.title}
                                    icon={item?.icon}
                                    handleClick={handleToggleLeft}
                                />
                            )
                        ))}
                    </div>
                }
            </div>
            {/* <div
             id="sidebar"
                className={` z-50 fixed bg-gray-500 text-[#000000] shadow-xl overflow-y-auto min-h-screen inset-y-0 left-0 transform 
                 ${isActive ? "w-[70px] transition-all duration-200 -translate-x-full lg:translate-x-0" : "w-64 transition-all duration-200 ease-in-out bg-gray-500"
                    } transition-all duration-200 px-2`}

            >
                <FcBrokenLink className="text-3xl relative left-1 w-full h-10 my-5 border-b z-50 " />
                {
                    isActive ? <div>Left menu</div> : <div className="bg-transparent text-black hidden lg:block">
                    <div className="flex flex-col items-start justify-center">
                        {linkMenus.map((menu, index) => (
                            <div key={index} className="relative w-full">
                              
                                <div
                                    role="button"
                                    className="btn flex items-center justify-start w-full"
                                    onClick={() => toggleSubMenu(index)}
                                >
                                    {menu.icon}
                                    <span className={`${isActive ? 'hidden' : 'ml-2'}`}>{menu.title}</span>
                                </div>

                             
                                {activeMenuIndex === index && (
                                    <div className="absolute left-16 top-0 w-48 bg-white shadow-lg z-50 p-3">
                                        <ul className="space-y-2">
                                            {menu.subTitle.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path} className="text-blue-500 hover:underline">
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div> */}

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
            <div className={` 
                ${isActiveIconContent ? 'w-full lg:w-[calc(100%-70px)]' : 'w-full lg:w-[calc(100%-256px)]'} 
                pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5 relative z-[-1] min-h-screen`}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashbaordLayout;
