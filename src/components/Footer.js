import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
  const today = new Date();
  return (
    <div className="flex bg-zinc-900 text-white  w-full p-2 justify-around items-center flex-row flex-wrap gap-4">
      <div> Eduardo Orozco Mendoza {today.getFullYear()}</div>
      <div className="flex flex-col flex-nowrap max-w-md text-center">
        <div className="text-2xl font-bold">Follow us</div>
        <div className="flex flex-row flex-wrap gap-8 my-4 justify-center">
          <Link
            href="https://www.facebook.com/orozcorplive"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center min-w-[150px]"
          >
            <FaFacebookF /> Facebook
          </Link>
          <Link
            href="https://www.instagram.com/orozcorp_live/"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center"
          >
            {" "}
            <FaInstagram /> Instagram
          </Link>
          <Link
            href="https://twitter.com/orozcorp_live"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center"
          >
            <BsTwitterX />X
          </Link>
          <Link
            href="https://www.youtube.com/@orozcorp"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center"
          >
            <CiYoutube />
            Youtube
          </Link>
          <Link
            href="https://www.tiktok.com/@orozcorp_live"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center"
          >
            <FaTiktok />
            Tik Tok
          </Link>
          <Link
            href="https://www.linkedin.com/in/orozcorp/"
            className="flex flex-row flex-nowrap gap-2 items-center justify-center"
          >
            <SlSocialLinkedin />
            Linked In
          </Link>
        </div>
      </div>
    </div>
  );
}
