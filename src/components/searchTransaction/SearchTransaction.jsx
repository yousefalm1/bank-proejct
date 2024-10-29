function SearchTransaction({ onSearchChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onSearchChange((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="flex gap-4">
      <input
        // type="number"
        name="amount"
        onChange={handleChange}
        placeholder="Search by amount"
        className="w-1/3 border border-black rounded-md p-3"
      />
      <input
        type="date"
        name="from"
        onChange={handleChange}
        className="w-1/3 border border-black rounded-md p-3"
      />
      <input
        type="date"
        name="to"
        onChange={handleChange}
        className="w-1/3 border border-black rounded-md p-3"
      />
    </div>
  );
}

export default SearchTransaction;
