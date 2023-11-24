import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../utils/authOptions";
export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session || !session?.roles.includes("admin")) {
    return redirect("/");
  }
  return <>{children}</>;
}
