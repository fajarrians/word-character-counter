import React, { useState } from "react";

function Main(props) {
  const [text, setText] = useState("");
  const textChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="bg-[#F9F5FF]  pt-4 hidden sm:contents">
        <div className="sm:px-48 px-4">
          <div className="">
            <textarea
              id="input"
              className="form-textarea w-full rounded-xl border-none shadow-2xl"
              rows="15"
              placeholder="Type in here..."
              value={text}
              onChange={textChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <div className="relative left- bottom-10 px-3">
              <div className="h-[80px] w-[80px] rounded-lg flex items-center justify-center  bg-[#1D1E29] text-white">
                <div className="font-semibold text-2xl">
                  <p>{text.split(" ").length}</p>
                </div>
              </div>
            </div>
            <div className="relative left- bottom-10 px-3">
              <div className="h-[80px] w-[80px] rounded-lg flex items-center justify-center  bg-[#1D1E29] text-white">
                <div className="font-semibold text-2xl">
                  <p>{text.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F5FF] sm:hidden pt-7">
        <div className="sm:px-48 px-4">
          <div className="">
            <textarea
              id="input"
              className="form-textarea w-full rounded-xl border-none shadow-2xl"
              rows="13"
              placeholder="Type in here..."
              value={text}
              onChange={textChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <div className="relative left- bottom-10 px-3">
              <div className="h-[70px] w-[70px] rounded-lg flex items-center justify-center  bg-[#1D1E29] text-white">
                <div className="font-semibold text-xl">
                  <p>{text.split(" ").length}</p>
                </div>
              </div>
            </div>
            <div className="relative left- bottom-10 px-3">
              <div className="h-[70px] w-[70px] rounded-lg flex items-center justify-center  bg-[#1D1E29] text-white">
                <div className="font-semibold text-xl">
                  <p>{text.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
