import { getUserData, logout } from "@/lib/user";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Navbar() {
  const navigate = useNavigate();
  const { userid } = getUserData();

  return (
    <div className="p-5 bg-transparent w-full flex items-center justify-between  fixed top-0 z-10">
      <div className="text-2xl font-semibold flex gap-3">
        <MountainIcon />
        <div>
          <span className="text-rose-500">Lamp</span>Stack
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <div>
          <Link to={"/blogs"}>
            <Button>Blogs</Button>
          </Link>
        </div>
        <div>
          {userid ? (
            <Button
              variant={"ghost"}
              onClick={() => {
                logout();
                navigate("/login");
                toast.success("Successfully logged in");
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to={"/login"}>
              <Button variant={"ghost"}>Log in</Button>
            </Link>
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
