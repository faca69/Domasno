import { Country } from "../COMMON/types/country.interface";

import { useParams } from "react-router-dom";
import CountryCard from "./CountryCard";
import MarginContainerWrapper from "./MarginContainerWrapper";

type CategoryPageProps = {
  countries: Country[];
};

const CategoryPage = ({ countries }: CategoryPageProps) => {
  const { categoryName: Category } = useParams();

  const filteredCountries: Country[] = countries.filter(
    (country) => country.region === Category
  );

  return (
    <MarginContainerWrapper>
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-4">{Category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </MarginContainerWrapper>
  );
};

export default CategoryPage;
