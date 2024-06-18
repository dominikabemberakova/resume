// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import GlowCard from "../../helper/glow-card";
import Image from "next/image";
import { MdDownload } from "react-icons/md";


function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-8 w-full lg:w-1/2">
          <GlowCard identifier="contact-email">
            <div className="p-3 relative text-white">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex items-center gap-x-8 px-3 py-5">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">Email</p>
                  <p className="text-sm sm:text-base">{personalData.email}</p>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard identifier="contact-phone">
            <div className="p-3 relative text-white">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex items-center gap-x-8 px-3 py-5">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">Phone</p>
                  <p className="text-sm sm:text-base">{personalData.phone}</p>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard identifier="contact-address">
            <div className="p-3 relative text-white">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex items-center gap-x-8 px-3 py-5">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">Address</p>
                  <p className="text-sm sm:text-base">{personalData.address}</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 justify-center">
          <Link target="_blank" href={personalData.github}>
            <IoLogoGithub
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.linkedIn}>
            <BiLogoLinkedin
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 justify-center">
            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
      </div>
    </div>
  );
}

export default ContactSection;
