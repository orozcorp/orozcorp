export default async function layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen flex-nowrap items-center my-8">
      <div className="flex flex-col flex-nowrap w-full lg:w-[95%] p-2">
        {children}
      </div>
    </div>
  );
}
