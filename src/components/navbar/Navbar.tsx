import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-[var(--nav-height)] relative">
      {/*============== MOBILE============== */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide font-semibold">AJOM</div>
        </Link>
        <Menu />
      </div>
      {/* ============ BIGGER SCREEN ============ */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-10">
          <Link href="/" className="flex gap-2">
            <Image src="/logo.png" alt="" width={35} height={35} />
            <div className="text-2xl tracking-wide font-semibold">AJOM</div>
          </Link>
          <div className="hidden xl:flex gap-3">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop">Deals</Link>
            <Link href="/shop">About</Link>
            <Link href="/shop">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
