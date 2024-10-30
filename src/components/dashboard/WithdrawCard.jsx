import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { withdrawFunds } from '@/actions/transactions/withdraw';

const WithdrawCard = () => {
  return (
    <Card className="h-72 md:h-80 lg:h-90 shadow-lg border border-border bg-background p-2 md:p-6 lg:p-8">
      <CardHeader>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
          Withdraw Funds
        </h2>
        <CardDescription className="text-xs md:text-sm lg:text-base text-muted-foreground">
          Safely withdraw funds out of your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={withdrawFunds}>
          <Label className="text-sm md:text-base">Amount</Label>
          <Input
            type="text"
            name="amount"
            placeholder="Enter amount"
            required
            className="border border-border w-full p-2 md:p-3 lg:p-4 rounded-lg"
          />
          <Button
            type="submit"
            className="mt-4 w-full bg-foreground py-2 md:py-3 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg"
          >
            Withdraw
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WithdrawCard;
