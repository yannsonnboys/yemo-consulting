import React from "react";

function Footer() {
  return (
    <div className="border-t-[1px] hidden md:block">
      <div className="flex justify-evenly gap-4 p-4">
        <div>
          <div className="flex flex-col p-4 cursor-pointer text-xl">
            All rights reserved. ©2025 by Yemo Consulting LLC.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
