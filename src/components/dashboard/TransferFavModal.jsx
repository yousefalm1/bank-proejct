'use client';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import TransferFavModalForm from './TransferFavForm';

export function TransferFavModal({ favorite, profile }) {
  const [transferAmount, setTransferAmount] = useState('');

  const remainingBalance = profile.balance - (parseFloat(transferAmount) || 0);

  const handleTransferChange = (e) => {
    setTransferAmount(e.target.value);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Transfer</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-6 space-y-6 border border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-semibold">
            Transfer Funds
          </AlertDialogTitle>
          <div className="space-y-6 mt-4">
            <div>
              <p className="text-lg font-medium text-muted-foreground">
                {favorite.username}’s Current Balance
              </p>
              <p className="text-3xl font-bold text-primary mt-1">
                {new Intl.NumberFormat('en-KW', {
                  style: 'decimal',
                  notation: 'compact',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(favorite.balance)}{' '}
                KWD
              </p>
            </div>

            <div className="mt-4">
              <p className="text-lg font-medium text-muted-foreground">
                Amount to Transfer
              </p>
              <TransferFavModalForm
                favorite={favorite}
                handleTransferChange={handleTransferChange}
                transferAmount={transferAmount}
                remainingBalance={remainingBalance}
                profile={profile}
              />
            </div>

            <div className="mt-4">
              <p className="text-lg font-medium text-muted-foreground">
                Remaining Balance
              </p>
              <p
                className={`text-2xl font-bold mt-1 ${
                  remainingBalance < 0 ? 'text-red-500' : 'text-primary'
                }`}
              >
                {remainingBalance < 0
                  ? 'Insufficient funds'
                  : `${new Intl.NumberFormat('en-KW', {
                      style: 'decimal',
                      notation: 'compact',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(remainingBalance.balance)} KWD`}
              </p>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center justify-end space-x-4 mt-6">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={remainingBalance < 0 || transferAmount === ''}
            className={`  ${
              remainingBalance < 0 || transferAmount === ''
                ? 'cursor-not-allowed'
                : ''
            }`}
          >
            <label htmlFor="submit-transfer-form" tabIndex="0">
              Transfer
            </label>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TransferFavModal;
