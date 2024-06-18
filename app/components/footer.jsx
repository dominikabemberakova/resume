// @flow strict
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 justify-center">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/dominika-bemberáková/" className="text-[#16f2b3]">Dominika Bemberakova</Link>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;