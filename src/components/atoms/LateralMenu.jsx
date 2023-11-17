import { FaTimes } from "react-icons/fa";
import { signOut } from "next-auth/react";
function LateralMenu({ toggled, setToggled, session }) {
  const userFamiliar = session?.roles.includes("familiar");
  return (
    <div
      className={`${
        toggled ? "sideNavMoved" : "sidenav"
      } flex flex-col flex-nowrap content-start justify-start items-center h-screen bg-cyan-900`}
      id="mySidenav"
      onClick={() => setToggled(!toggled)}
    >
      <FaTimes
        style={{ alignSelf: "left", marginBottom: "30px", color: "#fff" }}
      />
      {session && (
        <button
          className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={signOut}
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default LateralMenu;
