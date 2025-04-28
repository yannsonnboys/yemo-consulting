import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image
        src="/images/logo/Logo2.png"
        width={50}
        height={50}
        alt="Logo"
        className="rounded-full p-1"
      />
    </div>
  );
}

export default Logo;
