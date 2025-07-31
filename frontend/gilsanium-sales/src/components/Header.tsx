import React from "react";
import type { UserProfileType } from "./Header.interface";
interface HeaderProps {
  onMenuClick: () => void;
  user: UserProfileType;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  return (
    <header className="bg-white border-b border-[#EFEFEF] w-full">
      <div className="flex flex-wrap items-center justify-between h-auto min-h-16 lg:px-10 px-4 py-3 gap-y-2">
        {/* Left Section */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <button onClick={onMenuClick} className="lg:hidden mr-2 flex-shrink-0">
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
          <div className="text-secondary-200 truncate">
            <h1 className="text-base md:text-lg font-medium truncate">Sales Overview</h1>
            <p className="text-xs font-normal truncate">
              Monitor all your content activity
            </p>
          </div>
        </div>

        {/* Right Section - Icons and User Profile */}
        <div className="flex items-center text-secondary-200 min-w-0">
          <div className="flex items-center space-x-2 sm:space-x-4 mr-2 sm:mr-6">
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
            <span className="hidden sm:inline">|</span>
          </div>
          <img
            src="/Profileimage Container.svg"
            alt="Profile"
            className="w-8 h-8 sm:w-[36px] sm:h-[36px] flex-shrink-0"
          />
          <div className="hidden sm:block text-left mr-2 ml-2 truncate max-w-[120px]">
            <p className="text-sm md:text-md font-medium truncate">{user?.name || "Amiril mu’"}</p>
            <p className="text-[10px] font-normal truncate">
              {user?.email || "amirilmu@mail.example"}
            </p>
          </div>
          <button className="ml-1">
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
