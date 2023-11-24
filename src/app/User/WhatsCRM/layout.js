import NavMenu from "../NavMenu";
import LeftPanel from "./LeftPanel";
export default async function layout({ children }) {
  return (
    <>
      <NavMenu />
      <div className="flex flex-row flex-wrap w-full border">
        <LeftPanel />
        {children}
      </div>
    </>
  );
}
