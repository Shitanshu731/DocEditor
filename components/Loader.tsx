import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icon/loader.svg"
        alt="loader"
        height={32}
        width={32}
        className="animate-spin"
      />
    </div>
  );
};

export default Loader;
