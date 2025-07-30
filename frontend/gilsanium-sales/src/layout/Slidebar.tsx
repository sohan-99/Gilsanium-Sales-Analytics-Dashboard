import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import type { SidebarProps, MenuItemType } from "./Slideber.interface";
import { menuItems, accountItems } from "./Slideber.interface";

const Slidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["product"]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  const isParentActive = (item: MenuItemType) => {
    if (item.children) {
      return item.children.some((child: MenuItemType) => isActive(child.href));
    }
    return isActive(item.href);
  };

  const renderMenuItem = (item: MenuItemType) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const activeItem = isParentActive(item);

    return (
      <li key={item.id}>
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleExpanded(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-[10px] outline-none transition-colors ${
                activeItem
                  ? "text-secondary-200 bg-white"
                  : "text-secondary-200 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 mr-3"
                  />
                )}
                {item.label}
                {item.badge && (
                  <span className="ml-auto mr-2 bg-red-500 text-secondary-200 text-xs rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>
            </button>
            {isExpanded && item.children && (
              <ul className="ml-6 mt-2 space-y-1">
                {item.children.map((child: MenuItemType) => (
                  <li key={child.id}>
                    <NavLink
                      to={child.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 outline-none  text-sm font-medium rounded-[10px] ${
                          isActive
                            ? "text-secondary-200 bg-white"
                            : "text-secondary-200 hover:bg-gray-100 hover:text-secondary-200"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <NavLink
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-sm outline-none font-medium rounded-[10px] transition-colors ${
                isActive
                  ? "text-secondary-200 bg-white"
                  : "text-secondary-200 hover:bg-gray-100 hover:text-secondary-200"
              }`
            }
          >
            {item.icon && (
              <img src={item.icon} alt={item.label} className="w-5 h-5 mr-3" />
            )}
            {item.label}
            {item.badge && (
              <span className="ml-auto px-2 py-0.5">{item.badge}</span>
            )}
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <div
      className={` ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-[260px] bg-[#EFEFEF] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
    >
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between m-[24px]">
        <NavLink
          to="/"
          className="flex items-center justify-between space-x-24"
        >
          <img src="/Logo.svg" alt="" className="w-[76px] h-[30px]" />
         <div className="border border-[#DFDFDF] rounded-[8px] p-2">
           <img src="/Sun.svg" alt="Close" className="w-6 h-6 filter" />
         </div>
        </NavLink>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded hover:bg-gray-200 transition-colors"
        >
          <img src="/Sun.svg" alt="Close" className="w-6 h-6 filter" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        {/* General Menu */}
        <div className="mb-8">
          <p className="text-xs font-medium text-[12px] text-gray-400 uppercase tracking-wider mb-3">
            GENERAL MENU
          </p>
          <ul className="space-y-1">{menuItems.map(renderMenuItem)}</ul>
        </div>

        {/* Account Menu */}
        <div>
          <p className="text-xs font-medium text-[12px] text-gray-400 uppercase tracking-wider mb-3">
            ACCOUNT
          </p>
          <ul className="space-y-1">{accountItems.map(renderMenuItem)}</ul>
        </div>
      </nav>

      {/* Promotional Card - Fixed at bottom */}
      <div className="p-4 mt-auto text-secondary-200">
        <div className="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center mb-3">
              <div className="rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/Upgrade Icon Container.svg"
                  alt=""
                  className="w-6 h-[24px]"
                />
              </div>
              <div>
                <h3 className="font-medium text-sm">Activate Super</h3>
                <p className="text-[11px] font-normal">
                  Unlock All features on Gilsanum
                </p>
              </div>
            </div>
            <button className="w-full bg-[#2158BE] border border-[#414FF4] text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
