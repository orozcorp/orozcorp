import { FaTimes } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
function LateralMenu({ toggled, setToggled, session }) {
  const user = session?.user;
  return (
    <div
      className={`${
        toggled ? "sideNavMoved" : "sidenav"
      } flex flex-col flex-nowrap content-start justify-start items-center h-screen bg-zinc-900`}
      id="mySidenav"
      onClick={() => setToggled(!toggled)}
    >
      <FaTimes
        style={{ alignSelf: "left", marginBottom: "30px" }}
        className="text-zinc-900"
      />
      <div className="flex flex-col flex-nowrap justify-center items-center gap-4 mb-8">
        {user?.picture && (
          <Image src={user.picture} width="50" height="50" alt="profile" />
        )}
        {user?.name && <p className="text-zinc-900 max-w-xs">{user.name}</p>}
      </div>
      <Link
        href="/User"
        className="text-zinc-700 hover:text-zinc-950"
        alt="User"
        onClick={() => setToggled(!toggled)}
      >
        Inicio
      </Link>

      {session && (
        <button
          className="mt-12 text-white bg-zinc-700 hover:bg-zinc-950 focus:ring-4 focus:outline-none focus:ring-zinc-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={signOut}
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default LateralMenu;
