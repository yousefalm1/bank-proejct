import { widthdrawFunds } from "@/actions/transactions/withdraw";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function withdrawForm() {
  return (
    <div>
      <form action={widthdrawFunds} className="mt-2">
        <Input
          min="0"
          name="amount"
          required
          placeholder="Amount"
          className="w-full sm:w-[380px] md:w-[400px] lg:w-[450px] rounded-2xl py-6 mt-5"
        />
        <button
          className="flex justify-center items-center  border"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default withdrawForm;
