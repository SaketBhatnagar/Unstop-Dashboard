import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Main from "../component/Main";

const Assesment = () => {
  const [hideNav, setHideNav] = useState(false);
  //! ---------- handleNav ---------
  //! used to show and hide the nav bar.
  // - applied this handler at left popup menu.
  // - applied this handler at top left , near Assessment heading.
  const handleNav = e => {
    //! ------------- below logic ------------
    //! we have applied class "close" and "open-nav" to icons to show and hide.
    // - if elements class has class - close -> close the nav
    // - if elements class has class - open-nav -> open the nav

    if (
      "close" ===
      Array.from(e.target.classList).filter(val => val === "close")[0]
    )
      setHideNav(false);
    else if (
      "open-nav" ===
      Array.from(e.target.classList).filter(val => val === "open-nav")[0]
    )
      setHideNav(true);
  };

  // passing hidenNav state and handleNav function as a prop
  // so from both Navbar and Main component we can use same state and handler function
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
