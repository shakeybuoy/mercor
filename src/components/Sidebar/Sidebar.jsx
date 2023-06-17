"use client";
import { useState } from "react";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <section
      //   onMouseEnter={() => setCollapse(false)}
      //   onMouseLeave={() => setCollapse(true)}
      className={`h-full relative border-r-2  ${
        collapse ? " collapsed" : " expanded"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b-2">
        <div className="flex items-center gap-1 centered h-10">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <h2 className="font-bold text-xl">Project M.</h2>
        </div>
        <button
          className="button-center"
          type="button"
          onClick={() => handleCollapse()}
        >
          <img src="/collapse.png" alt="Logo" className="h-6" />
        </button>
      </div>

      <div className="overflow-y-auto h-custom">
        <div className="mx-3 border-b-2 py-2 space-y-1">
          <Options img={"/home.png"} text={"Home"} />
          <Options img={"/message.png"} text={"Messages"} />
          <Options img={"/task-square.png"} text={"Tasks"} />
          <Options img={"/members.png"} text={"Members"} />
          <Options img={"/setting-2.png"} text={"Settings"} />
        </div>
        <div className="mx-3 py-3 text-[#787486]">
          <div className="flex justify-between centered mx-3 mb-5">
            <h5 className="uppercase font-bold text-xs">My Projects</h5>
            <button type="button">
              <img src="/add-square.png" alt="add" />
            </button>
          </div>
          <div className="space-y-1">
            <Projects text={"Mobile App"} color={"bg-[#7AC555]"} active />
            <Projects text={"Website Redesign"} color={"bg-[#FFA500]"} />
            <Projects text={"Design System"} color={"bg-[#E4CCFD]"} />
            <Projects text={"Wireframes"} color={"bg-[#76A5EA]"} />
          </div>
        </div>
        <div className="mx-3 mt-14">
          <div className="bg-[#f5f5f5] rounded-2xl w-full flex flex-col items-center mx-auto p-5 text-center relative remove-collapse">
            <div className="h-20 w-20 flex items-center justify-center rounded-full lamp absolute -top-12">
              <img src="/lamp-on.png" alt="lamp-on" />
            </div>
            <h4 className="mt-8 text-black font-medium text-sm">
              Thoughts Time
            </h4>
            <p className="text-[#787486] mt-2 font-normal text-xs">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button type="button" className="w-full rounded-lg bg-white p-3 mt-5 text-sm font-medium">Write a message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Options = ({ img, text }) => {
  return (
    <button
      type="button"
      className="flex gap-2 rounded items-center hover:bg-gray-100 duration-300 w-full px-3 centered h-10"
    >
      <img src={img} alt={text} />
      <h4 className="text-[#787486] font-medium text-base">{text}</h4>
    </button>
  );
};

const Projects = ({ color, text, active }) => {
  return (
    <>
      <button
        type="button"
        className={`flex rounded items-center justify-between duration-300 w-full px-3 centered h-10 ${
          active
            ? " bg-[#5030E514] font-semibold text-[#0D062D]"
            : " hover:bg-[#5030E514] font-medium"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`h-2 w-2 rounded-full ${color}`}></div>
          <h4 className="text-base">{text}</h4>
        </div>
        {active && (
          <img className="remove-collapse" src="/dots.png" alt="options" />
        )}
      </button>
    </>
  );
};
