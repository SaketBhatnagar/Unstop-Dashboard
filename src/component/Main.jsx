import React, { useState, useEffect, useRef } from "react";
import { PiPauseBold } from "react-icons/pi";
import ReactDOM from "react-dom";
import { HiUsers } from "react-icons/hi";
import { MdMarkEmailUnread, MdFilterAlt } from "react-icons/md";
import { IoLinkSharp, IoBriefcase } from "react-icons/io5";
import { RiBarChartFill } from "react-icons/ri";
import { HiOutlinePlus, HiDotsVertical, HiSearch } from "react-icons/hi";
import { BsCalendar2Date, BsChevronDown } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { CgClose } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import { TbClockHour5 } from "react-icons/tb";

const Main = props => {
  const [hideform, setHideForm] = useState(false);
  const [hideAssessment, setAssessment] = useState(false);

  const handleForm = e => {
    if (
      "close" ===
      Array.from(e.target.classList).filter(val => val === "close")[0]
    )
      setHideForm(false);
    if (
      "open-form" ===
      Array.from(e.target.classList).filter(val => val === "open-form")[0]
    )
      setHideForm(true);
  };

  const handleAssementOverview = e => {
    setAssessment(!hideAssessment);
  };

  return (
    <>
      <section className="bg-white w-[100%] h-[100vh] text-[#1c4980] ">
        <article className="flex gap-3 items-center lg:hidden pt-5 px-5">
          <span
            className="bg-[#f2f8fe] p-2 rounded-full open-form"
            onClick={props.handleNav}
          >
            <BiMenuAltLeft
              className="text-3xl open-form"
              onClick={props.handleNav}
            />
          </span>

          <h1 className="text-xl font-semibold">Assessment</h1>
        </article>
        <article className="flex items-center lg:h-24 sm:h-16 border-b-2 sm:flex-row-reverse lg:flex-row sm:justify-end  lg:justify-start">
          <h2 className=" py-2 border-r-2 lg:text-2xl sm:font-semibold px-6 sm:flex-1  lg:flex-grow-0 sm:text-[#4c6f9a] lg:text-[#1c4980] text-center">
            <span className="lg:hidden">Unstop </span>
            Assesments
          </h2>
          <div className=" lg:px-6 sm:px-0 lg:pt-9 sm:pt-5 font-semibold  text-[#0073e6]  h-full sm:flex-1 lg:flex-grow-0    ">
            <h3 className="border-b-4 h-full border-[#0073e6] text-center lg:w-44">
              My Assessment<span className="lg:hidden">s</span>
            </h3>
          </div>
        </article>
        <article
          className={`p-5 sm:${hideAssessment ? "block" : "hidden"} lg:block`}
        >
          <h3 className="text-xl font-semibold">Assesments Overview</h3>
          <div className="border-2 rounded-2xl flex my-4 flex-wrap items-center">
            <div className="border-r-2 p-5 sm:flex-1 lg:flex-grow-0 sm:border-b-2 lg:border-b-0   w-[160px] ">
              <h4 className="font-semibold mb-1  w-[160px]">Total Assesment</h4>

              <div className="text-xl pt-3 flex items-center gap-3">
                <span className="p-2 rounded-lg text-2xl text- bg-[#ebe8fd]  text-[#6548ee] block">
                  <PiPauseBold className="rotate-90" />
                </span>
                <span className="text-2xl font-bold">34</span>
              </div>
            </div>
            <div className="lg:border-r-2 p-5 sm:block lg:hidden flex-1 sm:border-b-2">
              <h4 className="font-semibold mb-1">Total Purpose</h4>
              {/*  ,#6548ee */}
              <div className="text-xl pt-3 flex items-center gap-3">
                <span className="p-2 rounded-lg text-2xl text- bg-[#ebe8fd]  text-[#6548ee] block">
                  <IoLinkSharp />
                </span>
                <span className="text-2xl font-bold">11</span>
              </div>
            </div>

            <div
              className="lg:border-r-2 sm:border-b-2 lg:border-b-0 p-5 
            lg:pt-6 pr-14"
            >
              <h4 className="font-semibold">Candidates</h4>

              <div className="lg:text-xl sm:text-base pt-3 flex items-center gap-3">
                <span className="p-2 rounded-lg text-2xl  text- bg-[rgb(235,232,253)]  text-[#6548ee] block">
                  <HiUsers />
                </span>
                <div className="lg:text-xl sm:text-lg font-bold border-r-2 pr-5 sm:w-[8.5rem] lg:w-[intial]">
                  11,145{" "}
                  <span className="lg:text-base sm:text-sm text-emerald-400">
                    +89
                  </span>
                  <div className="text-xs font-semibold m-1">
                    Total Candidate
                  </div>
                </div>
                <div className="lg:text-xl sm:text-lg font-bold sm:w-[8.5rem] lg:w-[intial]  pr-5">
                  1,14{" "}
                  <span className="lg:text-base sm:text-sm text-emerald-400">
                    +89
                  </span>
                  <div className="text-xs font-semibold m-1">Who Attamped</div>
                </div>
              </div>
            </div>
            <div className="lg:border-r-2 p-5 pr-14">
              <h4 className="font-semibold  ">Candidates Source</h4>

              <div
                className="text-xl lg:pt-2
              sm:pt-2 flex items-center gap-3 "
              >
                <span className="p-2 rounded-lg text-2xl  text- bg-[#fce8ef]  text-[#e9407a] block">
                  <MdMarkEmailUnread />
                </span>
                <div className="lg:text-xl sm:text-lg font-bold border-r-2  lg:pr-5 sm:flex sm:flex-wrap  lg:block sm:w-[5.2rem] lg:w-[initial]  ">
                  <div className="flex-1">
                    <span className=""> 11,00</span>
                    <span className="lg:text-base sm:text-sm sm:ml-1 lg:ml-1 text-emerald-400">
                      +89
                    </span>
                  </div>
                  <div className="text-xs font-semibold m-1  ">E-mail</div>
                </div>
                <div className="lg:text-xl sm:text-lg font-bold  lg:pr-5 flex border-r-2 sm:flex-col sm:w-[5rem] lg:w-[initial]">
                  <div className="flex items-center justify-between">
                    <span>451</span>
                    <span className="lg:text-base text-emerald-400 sm:text-sm sm:mr-3 lg:mr-0">
                      +89
                    </span>
                  </div>
                  <div className="text-xs font-semibold m-1 flex-1 ">
                    Social Share
                  </div>
                </div>
                <div className="lg:text-xl sm:text-lg font-bold  lg:pr-5 flex  sm:flex-col  sm:w-[5rem] lg:w-[initial]">
                  <div className="flex items-center justify-between flex-1">
                    <span>451</span>
                    <span className="lg:text-base text-emerald-400 sm:text-sm sm:mr-3 lg:mr-0">
                      +89
                    </span>
                  </div>
                  <div className="text-xs font-semibold m-1 flex-1 ">
                    Unique Link
                  </div>
                </div>
                {/* <div className="text-xl font-bold  pr-5 ">
                  145 <span className="text-base text-emerald-400">+89</span>
                  <div className="text-xs font-semibold m-1">Unique Link</div>
                </div> */}
              </div>
            </div>

            <div className=" p-5 sm:hidden lg:block">
              <h4 className="font-semibold mb-1">Total Purpose</h4>
              {/*  ,#6548ee */}
              <div className="text-xl pt-3 flex items-center gap-3">
                <span className="p-2 rounded-lg text-2xl text- bg-[#ebe8fd]  text-[#6548ee] block">
                  <IoLinkSharp />
                </span>
                <span className="text-2xl font-bold">11</span>
              </div>
            </div>
          </div>
        </article>
        <article className="p-5  ">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">My Assesment</h3>
            <div className="lg:hidden flex text-2xl gap-6 mr-3">
              <HiSearch />
              <MdFilterAlt />
              <span
                className={` border-2 p-2 rounded-full relative top-[-0.5rem]  ${
                  hideAssessment
                    ? "border-[#0073e6] bg-[#f2f8fe] "
                    : "border-transparent"
                }`}
                onClick={handleAssementOverview}
              >
                <RiBarChartFill
                  className="scale-x-[-1]"
                  onClick={handleAssementOverview}
                />
              </span>
            </div>
          </div>
          <div className="flex justify-start py-5 items-center sm:flex-col lg:flex-row gap-4 ">
            <div
              className="flex cursor-pointer flex-col bg-[#f6f8fa] border-2 border-dashed rounded-3xl w-[26rem] justify-center items-center h-60 p-3 gap-2 open-form sm:w-[90vw] lg:w-[26rem]"
              onClick={handleForm}
            >
              <div className="p-4 bg-white rounded-full w-16 h-16 open-form ">
                <HiOutlinePlus className="text-[#0073e6] text-[2rem] open-form " />
              </div>
              <span className="text-xl font-semibold  open-form">
                New Assesment
              </span>
              <p className="text-xs open-form">
                From here you can enter questions of multiple types like
              </p>
              <p className="text-xs open-form">
                MCQ,subjective(text or paragraph)!
              </p>
            </div>
            {/* -------------- */}
            <div className="flex flex-col bg-white border-2  rounded-3xl sm:w-[90vw] lg:w-[26rem] py-5 px-4 lg:h-60 sm:h-[initial] relative">
              <div className="flex justify-between h-7 ">
                <div className="text-xl pt-3 flex items-center gap-3">
                  <span className="p-4 rounded-xl text-2xl text- bg-[#ebe8fd]  text-[#6548ee] block">
                    <IoBriefcase className="text-2xl" />
                  </span>
                </div>
                <HiDotsVertical className="text-xl cursor-pointer" />
              </div>
              <div className="lg:mt-9  pb-1 sm:absolute lg:static top-2  left-24">
                <h4 className="lg:text-2xl  font-semibold sm:text-xl md:text-2xl">
                  Math Assessment
                </h4>
                <div className="flex gap-2 items-center py-2">
                  <span className="border-r-2 pr-3 lg:text-xl sm:text-lg font-semibold">
                    Job
                  </span>
                  <span className="lg:pl-3 sm:pl-1 flex justify-center items-center">
                    <BsCalendar2Date className="text-xl sm:hidden lg:block" />
                    <TbClockHour5 className="text-xl sm:text-[#8da4bf] sm:block lg:hidden" />
                    <span className="text-[#8da4bf] lg:ml-3 sm:ml-1 sm:mt-[-0.2rem] lg:mt-0">
                      19 April 2023
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 sm:mt-12 lg:mt-0 border-dashed pt-2 sm:text-sm lg:text-base">
                <div className="flex gap-3">
                  <div>
                    <div className="font-semibold">00</div>
                    <div>Duration</div>
                  </div>
                  <div>
                    <div className="font-semibold">00</div>
                    <div>Questions</div>
                  </div>
                </div>
                <div className="bg-red py-1 px-3 flex items-center gap-2 ">
                  <div className="flex items-center gap-2 rounded-3xl border-2 font-semibold border-[#1c4980] px-3 py-1  sm:text-sm lg:text-base">
                    <span>
                      <ImLink />
                    </span>

                    <span className="cursor-pointer"> Share</span>
                  </div>
                  <div className="pl-2 pt-1 rounded-full bg-[#6548ee] font-bold text-white w-9 h-9 text-base">
                    LP
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- */}
            <div className="flex flex-col bg-white border-2  rounded-3xl sm:w-[90vw] lg:w-[26rem] py-5 px-4 lg:h-60 sm:h-[initial] relative">
              <div className="flex justify-between h-7 ">
                <div className="text-xl pt-3 flex items-center gap-3">
                  <span className="p-4 rounded-xl text-2xl text- bg-[#ebe8fd]  text-[#6548ee] block">
                    <IoBriefcase className="text-2xl" />
                  </span>
                </div>
                <HiDotsVertical className="text-xl cursor-pointer" />
              </div>
              <div className="lg:mt-9  pb-1 sm:absolute lg:static top-2  left-24">
                <h4 className="text-2xl  font-semibold sm:text-xl md:text-2xl">
                  Math Assessment
                </h4>
                <div className="flex gap-2 items-center py-2">
                  <span className="border-r-2 pr-3 lg:text-xl sm:text-lg font-semibold">
                    Job
                  </span>
                  <span className="lg:pl-3 sm:pl-1 flex justify-center items-center">
                    <BsCalendar2Date className="text-xl sm:hidden lg:block" />
                    <TbClockHour5 className="text-xl sm:text-[#8da4bf] sm:block lg:hidden" />
                    <span className="text-[#8da4bf] lg:ml-3 sm:ml-1 sm:mt-[-0.2rem] lg:mt-0">
                      19 April 2023
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 sm:mt-12 lg:mt-0 border-dashed pt-2 sm:text-sm lg:text-base">
                <div className="flex gap-3 ">
                  <div>
                    <div className="font-semibold">00</div>
                    <div>Duration</div>
                  </div>
                  <div>
                    <div className="font-semibold">00</div>
                    <div>Questions</div>
                  </div>
                </div>
                <div className="bg-red py-1 lg:px-3 sm:px-1 flex items-center gap-2 ">
                  <div className="flex items-center gap-2 rounded-3xl border-2 font-semibold border-[#1c4980] px-3 py-1 mt-1 sm:text-sm lg:text-base">
                    <span>
                      <ImLink />
                    </span>
                    <span className="cursor-pointer"> Share</span>
                  </div>
                  <div className="relative bottom-4 w-16 bg-slate-400  flex  ">
                    <div className="p-1 px-2 rounded-full bg-[#6548ee] right-8 absolute border-2 border-white font-bold text-white w-9 h-9">
                      LP
                    </div>
                    <div className="p-1 px-2 rounded-full bg-[#3079e1] font-bold absolute z-[2] border-2 border-white text-white w-9 h-9 right-4">
                      LP
                    </div>
                    <div className="p-1 px-2 rounded-full bg-[#e9407a] font-bold absolute z-[3] border-2 border-white text-white w-9 h-9 right-0">
                      LP
                    </div>
                  </div>
                  <span className="text-xs font-bold lg:hidden ">+324</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {hideform &&
          ReactDOM.createPortal(
            <section
              className=" m-auto  bg-[#00000060] top-0  overflow-y-auto   h-[100vh] w-full fixed text-[#1c4980] flex justify-center close z-[5] sm:pt-20 lg:pt-0"
              onClick={handleForm}
            >
              <article className="w-[40rem] bg-white rounded-lg  flex flex-col gap-4  pb-3 lg:h-[112%] animate-slideup sm:h-[146%] ">
                <div className="border-b-2 border-[#e1e2e6] p-7 flex justify-between items-center">
                  <h4 className="text-2xl font-semibold sm:hidden lg:block">
                    Create new assessment
                  </h4>
                  <h4 className="text-2xl font-semibold lg:hidden">
                    Sub-Section Details
                  </h4>

                  <span className="p-1 sm:text-[#d63500] lg:text-black sm:bg-[#fbebea] lg:bg-white rounded-full">
                    <CgClose
                      className="text-3xl font-semibold close   p-1"
                      onClick={handleForm}
                    />
                  </span>
                </div>
                <form className="px-7 flex flex-col gap-4">
                  <label
                    htmlFor="name-of-asmnt"
                    className="flex flex-col text-lg gap-2"
                  >
                    <span>Name of assessment</span>

                    <input
                      type="text"
                      id="name-of-asmnt"
                      placeholder="Type Here"
                      className="border-2 py-3 px-3  rounded-lg placeholder-[#1c4980]"
                    />
                  </label>
                  <label
                    htmlFor="test-purpose"
                    className="flex flex-col text-lg gap-2 relative"
                  >
                    <span>Purpose of the test is</span>
                    <BsChevronDown className="absolute top-14 right-6" />
                    <select
                      name=""
                      id="test-purpose"
                      className="border-2 py-3 pl-3 pr-8  rounded-lg placeholder-[#1c4980] bg-white select-style appearance-none"
                    >
                      <option value="">Select</option>
                    </select>
                  </label>
                  <label
                    htmlFor="description"
                    className="flex flex-col text-lg gap-2 relative"
                  >
                    <span>Description</span>
                    <BsChevronDown className="absolute top-14 right-6" />
                    <select
                      name=""
                      id="description"
                      className="border-2 py-3 pl-3 pr-8  rounded-lg placeholder-[#1c4980] bg-white select-style appearance-none"
                    >
                      <option value="">Select</option>
                    </select>
                  </label>
                  <label
                    htmlFor="skills"
                    className="flex flex-col text-lg gap-2 relative"
                  >
                    <span>Skills</span>
                    <div className="flex flex-col border-2 rounded-lg  ">
                      <div className=" py-3 px-3  rounded-lg placeholder-[#1c4980] flex flex-wrap gap-2">
                        <div className=" flex gap-2  text-sm font-semibold items-center bg-[#ddedff] py-1 px-2 rounded-2xl">
                          <span>UI/UX and Design</span>
                          <CgClose className=" font-semibold  m-1 text-lg cursor-pointer" />
                        </div>
                        <div className=" flex gap-2  text-sm font-semibold items-center bg-[#ddedff] py-1 px-2 rounded-2xl">
                          <span>No of Question</span>
                          <CgClose className=" font-semibold  m-1 text-lg cursor-pointer" />
                        </div>{" "}
                        <div className=" flex gap-2  text-sm font-semibold items-center bg-[#ddedff] py-1 px-2 rounded-2xl">
                          <span>Web Development</span>
                          <CgClose className=" font-semibold  m-1 text-lg cursor-pointer" />
                        </div>{" "}
                        <div className=" flex gap-2  text-sm font-semibold items-center bg-[#ddedff] py-1 px-2 rounded-2xl">
                          <span>UI/UX and Design</span>
                          <CgClose className=" font-semibold  m-1 text-lg cursor-pointer" />
                        </div>{" "}
                        <div className=" flex gap-2  text-sm font-semibold items-center bg-[#ddedff] py-1 px-2 rounded-2xl">
                          <span>Web Development</span>
                          <CgClose className=" font-semibold  m-1 text-lg cursor-pointer" />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="skills"
                        placeholder="Type here"
                        className=" py-3 px-3 outline-none mb-1 border-t-2 placeholder-[#1c4980]"
                      />
                    </div>
                  </label>
                  <label
                    htmlFor="duration-assmnt"
                    className="flex flex-col text-lg gap-2"
                  >
                    <span>Duration of assessment</span>

                    <input
                      type="text"
                      id="duration-assmnt"
                      placeholder="HH:MM:SS"
                      className="border-2 py-3 px-3 text-base rounded-lg "
                    />
                  </label>
                  <div
                    className="sm:w-[90vw]
                  lg:w-[initial] sm:py-2 bg-white sm:fixed bottom-0 left-5 lg:py-0 lg:static "
                  >
                    <button className="bg-[#0073e6] text-white p-3 font-semibold rounded-lg w-full ">
                      <span className="lg:block sm:hidden">Save</span>
                      <span className="lg:hidden sm:block">Next</span>
                    </button>
                  </div>
                </form>
              </article>
            </section>,
            document.getElementById("portal1")
          )}
      </section>
    </>
  );
};

export default Main;
