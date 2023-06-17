import React from "react";

export default function Header() {
  return (
    <header className="md:px-10 pl-10 py-5 border-b-2 w-full">
      <div className="h-10 w-full flex items-center gap-5 justify-between">
        <div className="md:w-1/3 hidden relative md:flex items-center">
          <img
            src="/search-normal.png"
            className="absolute left-2 -mt-1 w-4 md:w-auto"
          />
          <input
            type="text"
            name="search"
            id="search"
            className="bg-[#F5F5F5] text-[#787486] rounded pl-10 pr-5 py-2 w-full"
            placeholder="Search for anything..."
          />
        </div>
        <div className="flex gap-10 items-center justify-end">
          <div className="flex gap-4 items-center">
            <button type="button">
              <img src="/calendar-2.png" alt="calendar" />
            </button>
            <button type="button">
              <img src="/message-question.png" alt="message-question" />
            </button>
            <button type="button" className="relative">
              <div className="h-2 w-2 bg-[#D8727D] absolute rounded-full right-0"></div>
              <img src="/notification.png" alt="notification" />
            </button>
          </div>
          <div className="flex md:gap-4 gap-2 items-center text-right">
            <div>
              <h3>Anima Agrawal</h3>
              <h4 className="text-[#787486] text-sm">U.P, India</h4>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full">
                <img
                  src="https://i.pravatar.cc/150?img=10"
                  alt="pfp"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <button type="button">
              <img src="/arrow-down.png" alt="arrow-down" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
