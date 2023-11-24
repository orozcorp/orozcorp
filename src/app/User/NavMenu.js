"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { getData } from "../../lib/helpers/getData";
const QUERY_CHECK_STATUS = `query Query {
  getStatus
}`;

export default function NavMenu({}) {
  const [status, setStatus] = useState("gettingStatus");
  const checkStatus = async () => {
    try {
      const data = await getData({
        query: QUERY_CHECK_STATUS,
      });
      setStatus(data.getStatus); // Update status based on GraphQL response
    } catch (error) {
      console.error("Error checking status:", error);
    }
  };

  useEffect(() => {
    checkStatus();
  }, [status]);
  const pathname = usePathname();
  const active =
    "inline-block p-4 text-zinc-900 border-b-2 border-zinc-900 rounded-t-lg active";
  const inactive =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-zinc-900 hover:border-zinc-300";
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <Link
              href="/User"
              className={pathname === "/User" ? active : inactive}
            >
              Inicio
            </Link>
          </li>
          {status === "authenticated" && (
            <>
              <li className="me-2">
                <Link
                  href="/User/WhatsBlast"
                  className={
                    pathname === "/User/WhatsBlast" ? active : inactive
                  }
                >
                  WhatsBlast
                </Link>
              </li>
              <li className="me-2">
                <Link
                  href="/User/WhatsCRM"
                  className={pathname === "/User/WhatsCRM" ? active : inactive}
                >
                  WhatsCRM
                </Link>
              </li>
              <li className="me-2">
                <Link
                  href="/User/ChatDigest"
                  className={
                    pathname === "/User/ChatDigest" ? active : inactive
                  }
                >
                  ChatDigest
                </Link>
              </li>
            </>
          )}
          <li className="ml-auto">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-zinc-900 hover:border-zinc-300"
              onClick={signOut}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
