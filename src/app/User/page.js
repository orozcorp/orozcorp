"use client";
import NavMenu from "./NavMenu";
import { useState, useEffect } from "react";
import { getData } from "../../lib/helpers/getData";
import LogInPhone from "./LogInPhone";
import MyNumberData from "./MyNumberData";
import Spinner from "../../components/atoms/Spinner";
const QUERY_CHECK_STATUS = `query Query {
  getStatus
}`;
export default function page() {
  const [status, setStatus] = useState("gettingStatus");
  const [checking, setChecking] = useState(false);
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
  }, [checking]);
  return (
    <>
      <NavMenu />
      <div className="flex flex-col min-h-screen flex-nowrap items-center my-8">
        <div className="flex flex-col flex-nowrap w-full lg:w-[95%] p-2">
          {status !== "authenticated" && status !== "gettingStatus" && (
            <LogInPhone setChecking={setChecking} checking={checking} />
          )}
          {status === "gettingStatus" && <Spinner />}
          {status === "authenticated" && (
            <div className="flex flex-col flex-nowrap">
              <MyNumberData />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
