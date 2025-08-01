import React, { useState } from "react";
import type { UserProfileType } from "./Header.interface";
interface HeaderProps {
  onMenuClick: () => void;
  user: UserProfileType;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-[#EFEFEF] w-full">
      <div className="flex flex-wrap items-center justify-between h-auto min-h-16 lg:px-10 px-4 py-3 gap-y-2">
        {/* Left Section */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden mr-2 flex-shrink-0"
          >
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
          <div className="text-secondary-200 ">
            <h1 className=" md:text-lg font-medium ">Sales Overview</h1>
            <p className="text-xs font-normal">
              Monitor all your content activity
            </p>
          </div>
        </div>

        {/* Right Section - Icons and User Profile */}
        <div className="flex items-center text-secondary-200 min-w-0 relative">
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
            <p className="text-sm md:text-md font-medium truncate">
              {user?.name || "Amiril mu’"}
            </p>
            <p className="text-[10px] font-normal truncate">
              {user?.email || "amirilmu@mail.example"}
            </p>
          </div>
          <button onClick={toggleProfileDropdown} className="ml-1">
            <img src="/CaretDown.svg" alt="Profile" className="w-5 h-5" />
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-[#EFEFEF] items-center mx-auto rounded-[12px] shadow-lg w-72 z-50">
              {/* User Info Section */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/Profileimage Container.svg"
                    alt="Profile"
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#2B3674]">
                      {user?.name || "Amiril mu'"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.email || "amirilmu@mail.example"}
                    </p>
                    <p className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                      Pro Member
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Options */}
              <div className="p-2">
                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-[#2B3674] hover:bg-gray-50 rounded-[8px] flex items-center gap-3"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  View Profile
                </button>

                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-[#2B3674] hover:bg-gray-50 rounded-[8px] flex items-center gap-3"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Account Settings
                </button>

                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-[#2B3674] hover:bg-gray-50 rounded-[8px] flex items-center gap-3"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Help & Support
                </button>

                <hr className="my-2 border-gray-100" />

                {/* Authentication Options */}
                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-[#414FF4] hover:bg-blue-50 rounded-[8px] flex items-center gap-3 font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign In
                </button>

                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-[#414FF4] hover:bg-blue-50 rounded-[8px] flex items-center gap-3 font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  Create Account
                </button>

                <hr className="my-2 border-gray-100" />

                <button
                  onClick={closeProfileDropdown}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-[8px] flex items-center gap-3"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-gray-100 bg-gray-50 rounded-b-[12px]">
                <p className="text-xs text-gray-500 text-center">
                  Gilsanium Sales Dashboard v2.1.0
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
