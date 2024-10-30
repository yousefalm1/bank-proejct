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

const WithdrawCard = () => {
  return (
    <Card className="h-64 shadow-lg border border-border bg-background ">
      <CardHeader>
        <h2 className="text-xl font-semibold text-foreground">
          Withdraw Funds
        </h2>
        <CardDescription className="text-sm text-muted-foreground">
          Safely Withdraw funds out of your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Label>Amount</Label>
          <Input
            type="text"
            name="amount"
            placeholder="Enter amount"
            required
            className="border border-border"
          />
          <Button className="mt-4 w-full bg-foreground">Withdraw</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WithdrawCard;
