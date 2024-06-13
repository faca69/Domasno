import { useState } from "react";
import { Country } from "../COMMON/types/country.interface";
import countries from "../DATA/countries.json";
import CountryCard from "./CountryCard";
import Search from "./Search";
import CountryList from "./CountryList";

const Main = () => {
  const popularCountries = [...countries].slice(0, 10) as Country[];

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const filteredCountries =
    inputValue === ""
      ? popularCountries
      : (countries.filter((country) =>
          country.name.common.toLowerCase().includes(inputValue.toLowerCase())
        ) as Country[]);

  return (
    <div>
      <Search handleChange={handleChange} inputValue={inputValue} />

      {inputValue === "" ? (
        <main className="p-1">
          <h1 className="text-white font-bold text-2xl p-2 ml-44">
            10 Most Popular Tourist Destinations
          </h1>
          <div className="flex justify-center p-2 mt-8">
            <CountryList countries={popularCountries} />
            <CountryList countries={popularCountries} />
            <CountryList countries={popularCountries} />
          </div>
        </main>
      ) : (
        <ul className="flex flex-wrap justify-center p-2 mt-8 gap-4 ml-20 mr-20">
          {filteredCountries.map((country) => (
            <li
              key={country.name.common}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
