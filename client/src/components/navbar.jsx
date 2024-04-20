import { getUserData } from "@/lib/user";
import { Button } from "./ui/button";

function Navbar() {
  const { userid } = getUserData();

  return (
    <div className="p-5 bg-transparent flex items-center justify-between">
      <div className="text-2xl font-semibold flex gap-3">
        <MountainIcon />
        <div>
          <span className="text-rose-500">Lamp</span>Stack
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <div>
          {userid ? <Button>Dashboard</Button> : <Button>Sign up</Button>}
        </div>
        <div>
          {userid ? (
            <Button variant={"ghost"}>Logout</Button>
          ) : (
            <Button variant={"ghost"}>Log in</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default Navbar;
