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
import { depositFunds } from '@/actions/transactions/deposit';

const DepositCard = () => {
  return (
    <Card className="h-64 shadow-lg border bg-background border-border">
      <CardHeader>
        <h2 className="text-xl font-semibold text-foreground ">
          Deposit Funds
        </h2>
        <CardDescription className="text-sm text-muted-foreground">
          Safely deposit funds into your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={depositFunds}>
          <Label>Amount</Label>
          <Input
            type="text"
            name="amount"
            placeholder="Enter amount"
            required
            className="border border-border "
          />
          <Button type="submit" className="mt-4 w-full bg-foreground">
            Deposit
          </Button>
          ;
        </form>
      </CardContent>
    </Card>
  );
};

export default DepositCard;
