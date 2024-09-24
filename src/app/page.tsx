import { Button } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className="container ">
        <h1 className="text-2xl text-cyan-800 font-semibold">Hello World</h1>
        <Button
          color="primary"
          variant="ghost"
          size="sm"
          startContent={<FaRegSmile />}
        >
          Click Me
        </Button>
      </div>
    </>
  );
}
