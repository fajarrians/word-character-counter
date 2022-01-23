import React from "react";

function Footer(props) {
  return (
    <div className="bg-[#F9F5FF] py-5 ">
      <div className="text-center text-sm">
        <div className="font-semibold">
          Created by{" "}
          <a
            target="_blank"
            href="https://github.com/fajarrians"
            className="underline underline-offset-2 text-[#674EA7] hover:text-[#443172]"
          >
            Fajar Rian Setyawan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
