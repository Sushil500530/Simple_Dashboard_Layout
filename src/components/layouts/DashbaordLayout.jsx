import { useState } from "react";
import { Outlet } from 'react-router-dom';
import AccordionMenu from "../reuseable/accordion-menu";
import AccordionLink from "../reuseable/accordion-link";
import { dashboardData } from "../../data/menu-items";
import { RiMenu3Line } from "react-icons/ri";

const DashbaordLayout = () => {
    
    const [isActive, setIsActive] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleToggleLeft = () => {
        setIsActive(!isActive);
    };

    const handleToggle = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };
    return (
        <div>
            <div className="relative">
                {/* Sidebar */}
                <div
                    className={` z-50 fixed bg-[#0c0d2c] text-[#ffffff] shadow-xl overflow-y-auto min-h-screen inset-y-0 left-0 transform 
                    ${isActive ? "w-64 transition-all duration-200 translate-x-0" : "w-64 transition-all duration-200 -translate-x-full lg:translate-x-0"}`}
                >
                    {/* logo  */}
                    <div className="common-flex flex-col gap-1 w-full border-b border-b-gray-500 p-3">
                       <h1 className="text-3xl font-bold">LOGO</h1>
                    </div>
                    {/* all menu link are here map or called  */}
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
                </div>

                {/* Top navbar */}
                <div className="z-30 fixed top-0 bg-green-800 text-white right-0 flex items-center justify-between h-16 w-full lg:w-[calc(100%-256px)] px-5 shadow">
                    <div className="flex items-center">
                        <button className="text-gray-300 cursor-pointer p-2 block lg:hidden rounded-md" onClick={handleToggleLeft}>
                            <RiMenu3Line className="text-3xl" />
                        </button>
                    </div>
                    <div>User Profile</div>
                </div>
            </div>

            {/* Main Content */}
            <div onClick={() => setIsActive(false)} className="pt-[5rem] w-full lg:w-[calc(100%-256px)] float-right transition-all duration-200 p-5">
                <Outlet />
            </div>
        </div>
  )
}

export default DashbaordLayout;