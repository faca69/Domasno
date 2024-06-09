import { Country } from "../COMMON/types/country.interface";
import countries from "../DATA/countries.json";

const CountryList = ({ countries }: { countries: Country[] }) => (
  <section className="ml-10 mr-10">
    <ul className="bg-[#19232D] rounded-2xl hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-[#3C4B3E] p-5">
      {countries.map((country) => (
        <div>
          <li key={country.name.common} className="text-2xl p-1 pl-7 pr-7 flex">
            {country.name.common}
            <img className="  ml-3 size-8 " src={country.flag} alt="" />
          </li>
        </div>
      ))}
    </ul>
  </section>
);

const Main = () => {
  const popularCountries = [...countries].slice(0, 10) as Country[];

  return (
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
  );
};

export default Main;
