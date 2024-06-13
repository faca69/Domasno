import { Category } from "../COMMON/types/category.enum";
import MarginContainerWrapper from "./MarginContainerWrapper";

type NavbarProps = {
  selectedCategory: (category: Category | null) => void;
};

const Navbar = ({ selectedCategory }: NavbarProps) => {
  const categories = Object.values(Category);

  return (
    <MarginContainerWrapper>
      <div>
        <nav>
          <h1 className="text-center text-6xl font-bold bg-[#2F4256] m-5 rounded-2xl text-white p-6 shadow-[0_0_50px_0_rgba(0,0,0,0.3)] shadow-[#32483598]  ">
            TRIP PLANNER
          </h1>

          <div className="flex justify-center space-x-4 m-5 p-3">
            <ul className="flex gap-x-5">
              <li
                className="hover:text-[#C7F283] text-xl"
                onClick={() => selectedCategory(null)}
              >
                Home
              </li>
              {categories.map((category) => (
                <li
                  className="hover:text-[#C7F283] text-xl"
                  onClick={() => {
                    selectedCategory(category);
                  }}
                >
                  {category}
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
