import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import { Button } from "@nextui-org/react";
import NavBarLink from "./NavBarLink";

export default function TopNav() {
  return (
    <>
      <Navbar
        maxWidth="xl"
        className="bg-gradient-to-r from-purple-400 to-purple-700"
        classNames={{
          item: [
            "text-xl",
            "text-white",
            "uppercase",
            "data-[active=true]:text-yellow-200",
          ],
        }}
      >
        <NavbarBrand as={Link} href="/">
          <GiMatchTip size={40} className="text-gray-200" />
          <div className="font-bold text-3xl flex">
            <span className="text-gray-900">Next</span>
            <span className="text-gray-200">Match</span>
          </div>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavBarLink href="/members" label="Matches" />
          <NavBarLink href="/lists" label="Lists" />
          <NavBarLink href="/messages" label="Messages" />
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </NavbarContent>
      </Navbar>
    </>
  );
}
