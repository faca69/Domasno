import Footer from "./COMPONENTS/Footer";
import Main from "./COMPONENTS/Main";
import Navbar from "./COMPONENTS/Navbar";
// import { Category } from "./COMMON/types/category.enum";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./COMPONENTS/Category";

import countries from "./DATA/countries.json";
import { Country } from "./COMMON/types/country.interface";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c2936] text-[#B2C1C9]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main countries={countries as Country[]} />} />

        <Route
          path="/category/:categoryName"
          element={<CategoryPage countries={countries as Country[]} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
