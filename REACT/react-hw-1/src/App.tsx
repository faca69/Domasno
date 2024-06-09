import { useState } from "react";
import Footer from "./COMPONENTS/Footer";
import Main from "./COMPONENTS/Main";
import Navbar from "./COMPONENTS/Navbar";
import { Category } from "./COMMON/types/category.enum";

export default function App() {
  const [selectedCAtegory, setSelectedCategory] = useState<Category | null>(
    null
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#1c2936] text-[#B2C1C9]">
      <Navbar selectedCategory={setSelectedCategory} />
      {selectedCAtegory === null ? (
        <Main />
      ) : (
        <div className="text-white font-bold text-2xl p-2 ml-44">
          {selectedCAtegory} Page
        </div>
      )}

      <Footer />
    </div>
  );
}
