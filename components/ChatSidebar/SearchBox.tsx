import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="min-w-0 ps-3 pe-2 py-2 rounded-full outline-1 outline-transparent bg-gray-200 flex items-center gap-2 has-focus:outline-primary">
      <FiSearch size={18} className="flex-none" />

      <input
        type="text"
        placeholder="Search..."
        className="min-w-0 flex-1 outline-none"
      />
    </div>
  );
};

export default SearchBox;
