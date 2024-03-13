"use client";
import { useState } from "react";
import Menu from "../components/atoms/Menu";
import LateralMenu from "../components/atoms/LateralMenu";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Spinner from "../components/atoms/Spinner";
export default function Navbar() {
  const { data: session, status } = useSession();
  const [toggled, setToggled] = useState(false);
  return (
    <nav
      as="nav"
      className="flex flex-row flex-wrap justify-between items-center p-2 bg-white shadow-md z-50 w-full"
    >
      <LateralMenu
        toggled={toggled}
        setToggled={setToggled}
        session={session}
      />
      <div className="flex flex-row flex-wrap">
        <div className="m-2 md:m-4 flex flex-row flex-wrap justify-center items-end content-center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="ml-2 text-black text-3xl font-bold">Orozcorp</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-right items-center mr-2">
        {!session && status !== "loading" && (
          <>
            <button onClick={signIn} className="m-2 ">
              Sign In
            </button>
          </>
        )}

        {session && status !== "loading" && (
          <Menu toggled={toggled} setToggled={setToggled} />
        )}

        {status === "loading" && <Spinner />}
      </div>
    </nav>
  );
}
