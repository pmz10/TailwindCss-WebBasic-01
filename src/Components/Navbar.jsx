import { NavLink } from "react-router-dom";
import { GiBasketballBall } from "react-icons/gi";

const Navbar = () => {
  const MenuItem =  "mr-5 ml-5 trcking-wider flex-none";
  const MenuItemA = "block transition duration-200 hover:text-cyan-400 transform hover:scale-125";
  return (
    <div>
      <header className="h-36 bg-black font-sans text-white xs:h-40">
        <div className="container w-11/12 mx-auto flex md:flex-row xs:flex-col">
          <div id="logo" className="flex-1 xs:mx-auto">
            <div className="group w-64 pt-0.5 pb-0.5 mt-4 ml-6 bg-cyan-400 text-center tracking-wider cursor-pointer overflow-hidden transition duration-300 rounded-sm hover:text-black hover:bg-gray-200">
              <span className="block float-left text-3xl mt-1 ml-11 animate-spin-low group-hover:animate-none group-hover:animate-from-bellow">
                <GiBasketballBall />
              </span>
              <h3 className="block float-right text-4xl mt-1.5 mr-16 transition duration-100 font-medium group-hover:animate-from-right">Tailwind</h3>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-row h-20 items-center text-2xl text-center mr-6 xs:mr-0 xs:text-center md:justify-end">
              <li className={MenuItem}>
                <NavLink to="#" className={MenuItemA}>INICIO</NavLink>
              </li>
              <li className={MenuItem}>
                <NavLink to="#" className={MenuItemA}>BLOG</NavLink>
              </li>
              <li className={MenuItem}>
                <NavLink to="#" className={MenuItemA}>FORMACION</NavLink>
              </li>
              <li className={MenuItem}>
                <NavLink to="#" className={MenuItemA}>CONTACTO</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
