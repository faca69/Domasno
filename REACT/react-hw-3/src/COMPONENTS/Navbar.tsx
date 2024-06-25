import { Link, NavLink } from "react-router-dom";
import { Category } from "../COMMON/types/category.enum";
import MarginContainerWrapper from "./MarginContainerWrapper";

const Navbar = () => {
  const categories = Object.values(Category);

  return (
    <MarginContainerWrapper>
      <div>
        <nav>
          <h1 className="text-center text-6xl font-bold bg-[#2F4256] m-5 rounded-2xl text-white p-6 shadow-[0_0_50px_0_rgba(0,0,0,0.3)] shadow-[#32483598]  ">
            <Link to={"/"}>TRIP PLANNER</Link>
          </h1>

          <div className="flex justify-center space-x-4 m-5 p-3">
            <ul className="flex gap-x-5">
              <li className="hover:text-[#C7F283] text-xl">
                <Link to={"/"}>Home</Link>
              </li>

              {categories.map((category) => (
                <li className="cursor-pointer" key={category}>
                  <NavLink
                    to={`/category/${category}`}
                    className={({ isActive }) => {
                      if (isActive) {
                        return "text-[#556241] text-xl";
                      }

                      return "text-[#B3C1C9] hover:text-[#C7F283] text-xl";
                    }}
                  >
                    {category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </MarginContainerWrapper>
  );
};

export default Navbar;
