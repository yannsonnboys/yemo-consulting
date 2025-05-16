import React from "react";

function Footer() {
  return (
    <div className="border-t-[1px] hidden md:block">
      <div className="flex justify-evenly gap-4 p-4">
        <div>
          {/* <div className="flex flex-col p-4 cursor-pointer text-xl">
            <p className="text-gray-600">
              Copyright © 2025 Yemo Consulting LLC. All rights reserved Design &
              Developed by{" "}
              <a href="http://www.yemoconsulting.com" target="_blank">
                <b>Yemo Consulting</b>
              </a>
              .
            </p>
          </div> */}
          <div className="text-sm text-center justify-center cursor-pointer mt-5">
            <p className="text-gray-500">
              Copyright © 2025 Yemo Consulting LLC. All rights reserved <br />{" "}
              Design & Developed by{" "}
              <a href="http://www.yemoconsulting.com" target="_blank">
                <b>Yemo Consulting</b>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
