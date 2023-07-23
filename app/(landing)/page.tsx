import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-black font-semibold">
        Login or Register to Continue
      </h2>
      <div className="flex flex-row gap-2 justify-center items-center mt-4">
        <Link href="/sign-in">
          <Button className="bg-lime-500 text-white">Log in</Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-lime-500 text-white">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
