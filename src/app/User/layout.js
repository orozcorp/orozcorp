import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../utils/authOptions";
export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session || !session?.roles.includes("admin")) {
    return redirect("/");
  }
  return (
    <div className="flex flex-col min-h-screen flex-nowrap items-center my-8">
      <div className="flex flex-col flex-nowrap w-full lg:w-[90%] p-8">
        {children}
      </div>
    </div>
  );
}
