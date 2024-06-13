import { Country } from "../COMMON/types/country.interface";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div
      key={country.id}
      className=" border-[#19232D] border-2  bg-[#2F4256] p-4 rounded-lg  shadow"
    >
      <img
        className="w-full h-40 object-cover mb-2"
        src={country.flag}
        alt={country.name.common}
      />

      <h3 className="text-lg font-bold">{country.name.common}</h3>

      <h2 className="text-base">{country.population}</h2>
    </div>
  );
};

export default CountryCard;
