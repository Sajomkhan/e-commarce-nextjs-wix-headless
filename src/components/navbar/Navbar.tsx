import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

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
      <div className="w-1/3">
      <Link href="/">
      <Image src="/logo.png" alt="" width={60} height={60} />
        <div className="text-2xl tracking-wide font-semibold">AJOM</div>
        </Link></div>
      {/* RIGHT */}
      <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default Navbar;
