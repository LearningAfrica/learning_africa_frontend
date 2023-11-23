import { Link } from "react-router-dom";

import { navigation } from "../home/Data";

const NavMobile = () => {
  return (
    <nav className="bg-white w-full h-full shadow-2xl">
      <ul className="text-center h-full flex flex-col justify-center items-center gap-y-6">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link className="text-xl font-medium capitalize" to={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;