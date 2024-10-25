import "../index.css";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between bg-grey-100 h-24 border-b-[1px] border-gray-200">
      <img
        src="/Images/logo2.png"
        className="h-24 w-56 ml-2 md:ml-5"
        alt="Logo"
      />
      <ul className="flex flex-row mr-10 gap-5">
        <Link className="rounded-full">
          <VscAccount size={25} />
        </Link>
        <Link>
          <FiShoppingCart size={25} />
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
