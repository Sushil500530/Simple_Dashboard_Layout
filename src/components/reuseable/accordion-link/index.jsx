/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function AccordionLink({ pathName, linkTitle, icon: Icon, handleClick }) {
  return (
    <>
    {/* show for medium and small devices  */}
      <NavLink
      onClick={handleClick}
        to={pathName}
        className={({ isActive }) =>
          `lg:hidden flex items-center gap-1 text-[14px] lg:text-base font-normal px-3 py-2 w-full rounded-lg ${isActive
            ? " text-white"
            : "bg-transparent text-[#64748B]"
          }`
        }
      >
        {/* Conditionally render the icon if it exists */}
        {Icon && (
          <span className="w-[26px] h-[22px] mr-1 flex items-center justify-center">
            <Icon size={22} />
          </span>
        )}
        {linkTitle}
      </NavLink>

      {/* show for lg devices  */}
      <NavLink
        to={pathName}
        className={({ isActive }) =>
          `hidden lg:flex items-center gap-1 text-[14px] lg:text-base font-normal px-3 py-2 w-full rounded-lg ${isActive
            ? " text-white"
            : "bg-transparent text-[#64748B]"
          }`
        }
      >
        {/* Conditionally render the icon if it exists */}
        {Icon && (
          <span className="w-[26px] h-[22px] mr-1 flex items-center justify-center">
            <Icon size={22} />
          </span>
        )}
        {linkTitle}
      </NavLink>
    </>
  );
}
