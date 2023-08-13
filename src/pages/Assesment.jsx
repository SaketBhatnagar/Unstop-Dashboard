import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Main from "../component/Main";

const Assesment = () => {
  const [hideNav, setHideNav] = useState(false);
  const handleNav = e => {
    if (
      "close" ===
      Array.from(e.target.classList).filter(val => val === "close")[0]
    )
      setHideNav(false);
    if (
      "open-form" ===
      Array.from(e.target.classList).filter(val => val === "open-form")[0]
    )
      setHideNav(true);
  };
  return (
    <section className="bg-[#f2f3f4]">
      <article className="flex gap-4">
        <Navbar hideNav={hideNav} handleNav={handleNav}></Navbar>
        <Main hideNav={hideNav} handleNav={handleNav} />
      </article>
    </section>
  );
};

export default Assesment;
