import { Input } from "@/components/ui/input";
import { depositFunds } from "@/actions/transactions/deposit";
function DepositForm() {
  return (
    <form action={depositFunds} className="mt-2">
      <Input
        min="0"
        name="amount"
        required
        placeholder="Enter amount"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
