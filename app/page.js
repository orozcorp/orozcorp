import Navbar from "./Navbar";
import { Catamaran } from "@next/font/google";
const customFont = Catamaran({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function page() {
  return (
    <main className={customFont.className}>
      <Navbar />
    </main>
  );
}
