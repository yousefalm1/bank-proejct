import { Input } from '@/components/ui/input';
import { transferFunds } from '@/actions/transactions/transfer';

const TransferFavModalForm = ({
  favorite,
  profile,
  handleTransferChange,
  transferAmount,
  remainingBalance,
}) => {
  return (
    <form
      action={(formData) => transferFunds(formData, favorite.username)}
      className="mt-2"
    >
      <Input
        min="0"
        name="amount"
        max={profile.balance}
        value={transferAmount}
        onChange={handleTransferChange}
        required
        placeholder="Enter amount"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
      />
      {remainingBalance < 0 && (
        <p className="text-sm text-red-600 mt-2">
          Insufficient funds. Please enter a valid amount.
        </p>
      )}
      <input type="submit" id="submit-transfer-form" className="hidden" />
    </form>
  );
};

export default TransferFavModalForm;
