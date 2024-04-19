import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import GlowBar from "./GlowBar"

const NavBar = () => {
  return (
    <nav className="px-10 py-4 text-white flex justify-between">
      <Link href="/" className="text-2xl">ParaBTC</Link>
      <div className="relative">
        <GlowBar/>
        <ul className="hidden h-full gap-12 md:flex grow">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer regular-16 items-center tracking-tighter transition-all duration-500 hover:tracking-normal"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <button className="bg-gray-800 px-6 py-[0.3rem] rounded-lg tracking-tighter transition-all duration-500 hover:tracking-normal">Get Started</button>
    </nav>
  );
};

export default NavBar;
