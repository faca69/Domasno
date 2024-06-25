import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Country } from "../COMMON/types/country.interface";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const glowColor = country.landlocked
    ? "glow:bg-green-600"
    : "glow:bg-blue-600";

  const glowColor2 = country.landlocked ? "green" : "blue";
  return (
    <GlowCapture>
      <Glow color={glowColor2}>
        <div
          key={country.id}
          className={`${glowColor} border-[#1C2936] border-2  bg-[#2F4256] p-4 rounded-lg  shadow`}
        >
          <img
            className="w-full h-40 object-cover mb-2"
            src={country.flag}
            alt={country.name.common}
          />

          <h3 className="text-lg font-bold">{country.name.common}</h3>

          <h2 className="text-base">{country.population}</h2>
        </div>
      </Glow>
    </GlowCapture>
  );
};

export default CountryCard;
