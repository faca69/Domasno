type SearchProps = {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ inputValue, handleChange }: SearchProps) => {
  return (
    <div className="flex justify-center">
      <form>
        <input
          className="rounded-xl border border-[#131B23] bg-[#304256] p-3 focus:outline-none focus:ring-2 focus:ring-[#ABD277] shadow-md"
          type="text"
          placeholder="Insert Country Name"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
