import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <section className="w-full">
        <Header />
        {children}
      </section>
    </>
  );
}
