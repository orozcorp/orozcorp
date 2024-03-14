"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getStatus, wa_logOut } from "../../server/userInteraction";

export default function NavMenu({}) {
  const { data: status } = useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
    inictialData: "gettingStatus",
    refetchInterval: 5000,
  });
  const logoutMutation = useMutation({
    async mutationFn() {
      const { data, errors } = await wa_logOut();
      if (errors) throw errors;
    },
  });
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
              onClick={() => {
                logoutMutation.mutate();
                signOut();
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
