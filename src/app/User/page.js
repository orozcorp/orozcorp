"use client";
import NavMenu from "./NavMenu";
import LogInPhone from "./LogInPhone";
import MyNumberData from "./MyNumberData";
import Spinner from "../../components/atoms/Spinner";
import { getStatus } from "../../server/userInteraction";
import { useQuery } from "@tanstack/react-query";

export default function page() {
  const statusData = useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
    inictialData: "gettingStatus",
    refetchInterval: 5000,
  });
  const status = statusData.data;
  return (
    <>
      <NavMenu />
      <div className="flex flex-col min-h-screen flex-nowrap items-center my-8">
        <div className="flex flex-col flex-nowrap w-full lg:w-[95%] p-2">
          {status !== "authenticated" && status !== "gettingStatus" && (
            <LogInPhone />
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
