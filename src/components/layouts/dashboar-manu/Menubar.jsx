import { useState } from "react";
import { dashboardData } from "../../../data/menu-items";
import AccordionLink from "../../reuseable/accordion-link";
import AccordionMenu from "../../reuseable/accordion-menu";

export function MenubarContent({handleToggleLeft}) {
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleToggle = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="common-flex flex-col gap-1">
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
    );
};

