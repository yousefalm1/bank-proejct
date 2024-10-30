function SearchTransaction({ onSearchChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onSearchChange((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="flex gap-4">
      <input
        type="number"
        name="amount"
        onChange={handleChange}
        placeholder="Search by amount"
        className="w-1/3 border border-black rounded-md p-3 text-sm"
      />
      <input
        type="date"
        name="from"
        onChange={handleChange}
        className="w-1/3 border border-black rounded-md p-3 text-sm"
      />
      <select
        name="type"
        onChange={handleChange}
        className="w-1/3 border border-black rounded-md p-3 text-sm"
      >
        <option value="">All Types</option>
        <option value="transfer">Transfer</option>
        <option value="withdraw">Withdraw</option>
        <option value="deposit">Deposit</option>
      </select>
    </div>
  );
}

export default SearchTransaction;
