import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo-icon.png"
          alt="logo with name"
          width={65}
          height={32}
          className="md:block hidden shadow-2xl rounded-lg"
        />
        <Image
          src="/assets/icons/logo-icon.png"
          alt="Logo"
          width={52}
          height={32}
          className="mr-2 md:hidden shadow-2xl rounded-lg"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
