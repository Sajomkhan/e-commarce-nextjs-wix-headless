"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute w-4/6 right-0 top-[var(--nav-height)] h-[calc(100vh-var(--nav-height))] bg-[var(--bg-menu)] text-[var(--text-light)]
        flex flex-col items-center justify-center gap-10 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/shop">Deals</Link>
          <Link href="/shop">About</Link>
          <Link href="/shop">Contact</Link>
          <Link href="/shop">Loagout</Link>
          <Link href="/shop">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
