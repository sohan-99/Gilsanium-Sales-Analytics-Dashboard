import React from "react";
import type { UserProfileType } from "./Header.interface";
interface HeaderProps {
  onMenuClick: () => void;
  user: UserProfileType;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  return (
    <header className="bg-white border-b border-[#EFEFEF]">
      <div className="flex items-center justify-between h-16 lg:px-10 px-5 py-[19.5px]">
        {/* Left Section */}
        <div className="flex items-center">
          <button onClick={onMenuClick} className="lg:hidden mr-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="text-secondary-200">
            <h1 className="text-lg font-medium">Sales Overview</h1>
            <p className="text-xs font-normal">
              Monitor all your content activity
            </p>
          </div>
        </div>

        {/* Right Section - Icons and User Profile */}
        <div className="flex items-center text-secondary-200">
          <div className="flex items-center space-x-4 mr-6">
           <div className="border border-[#EFEFEF] rounded-[8px]">
             <button className="p-2 ">
              <img
                src="/MagnifyingGlass.svg"
                alt="Search"
                className="w-5 h-5"
              />
            </button>
           </div>
           <div className="border border-[#EFEFEF] rounded-[8px]">
             <button className="p-2 ">
              <img
                src="/Alert-Bell-Notification-2--Streamline-Ultimate.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
             
            </button>
           </div>
           <div className="border border-[#EFEFEF] rounded-[8px]">
             <button className="p-2">
              <img
                src="/Filter-Sort-Lines-Descending--Streamline-Ultimate.svg"
                alt="Filter"
                className="w-5 h-5"
              />
            </button>
           </div>
          <span>|</span>
          </div>
          <img
             src="/Profileimage Container.svg"
            alt="Profile"
            className="w-[36px] h-[36px] "
          />
          <div className="hidden sm:block text-left mr-[10px] ml-[8px]">
            <p className="text-md font-medium ">{user?.name || "Amiril mu’"}</p>
            <p className="text-[10px] font-normal ">
              {user?.email || "amirilmu@mail.example"}
            </p>
          </div>
          <button className="">
           <img
              src="/CaretDown.svg"
              alt="Profile"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
