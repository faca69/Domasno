import { Country } from "../COMMON/types/country.interface";

const CountryList = ({ countries }: { countries: Country[] }) => (
  <section className="ml-10 mr-10">
    <ul className="bg-[#19232D] rounded-2xl hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] transition hover:shadow-[#3C4B3E] p-5">
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

export default CountryList;
