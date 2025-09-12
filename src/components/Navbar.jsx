import { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-orange-300">
      <div className="flex justify-between items-center ml-6 mr-6 md:ml-30 md:mr-30 h-20">
        <div className="flex h-20 items-center">
          <Link to="/">
            <h1 className="font-bold text-3xl text-white">SocioGram</h1>
          </Link>
        </div>

        <div className="hidden lg:flex gap-x-15 items-center">
          <ul className="flex gap-15">
            <li className="hover:text-red-600">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/post">Post</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/bookmark">Bookmark</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>

          <div className="mb-4">
            <Link to="/Register">
              <Button text="Register" />
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-orange-200 px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link to="/home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/bookmark" onClick={() => setMenuOpen(false)}>
                Bookmark
              </Link>
            </li>
            <li>
              <Link to="/post" onClick={() => setMenuOpen(false)}>
                Post
              </Link>
            </li>
            <li>
              <Link to="/settings" onClick={() => setMenuOpen(false)}>
                Settings
              </Link>
            </li>
          </ul>

          <Link to="/Register" onClick={() => setMenuOpen(false)}>
            <Button text="Register" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
