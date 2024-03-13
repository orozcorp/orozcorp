export default function Footer() {
  const today = new Date();
  return (
    <div className="flex bg-zinc-950 w-full p-2 justify-center items-center">
      <div className="text-white"> Eduardo Orozco {today.getFullYear()}</div>
    </div>
  );
}
