import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import NavMobile from "./NavMobile";
import { navigation } from "../home/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-orange" : "bg-orange"
      } fixed left-0 w-full z-20 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              className="h-20 p-4"
              src="/learning-Africa-logo.png"
              alt="rausha kipaji logo"
            />
          </Link>

          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-xl cursor-pointer"
          >
            {mobileNav ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faCog} />}
          </div>

          <nav className="hidden md:flex">
            <ul className="md:flex gap-x-12">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    className="capitalize text-white hover:border-b hover:border-[#ff581f] hover:text-[#ff581f] transition-all"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
