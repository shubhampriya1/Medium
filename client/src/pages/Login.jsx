import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Card className="w-[350px]  md:w-96 m-auto my-16">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Already have an account?{" "}
          <Link to={"/login"} className="underline">
            Login
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col items-start gap-1 space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
           
           
            <div className="flex flex-col items-start gap-1 space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={"/"}>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
