import { useState } from 'react';
import logo from './../images/logo.svg';
import arrow from './../images/icon-arrow-down.svg';
import menu from './../images/icon-hamburger.svg';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const Menu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="p-32P bg-blue-400 w-[100dvw] h-[full]">
      <h1 hidden data-testid="test">
        Test
      </h1>
      <nav className="z-10 flex justify-between items-center">
        <img src={logo} className="z-10" alt="sunnyside" />

        {/* Mobile Menu */}
        <div className="z-10 md:hidden">
          <img
            onClick={Menu}
            src={menu}
            className="cursor-pointer"
            alt="mobile-menu"
          />
          {openMenu && (
            <ul className="absolute z-20 left-1/2 top-128I z-10 translate-x-[-50%] flex flex-col justify-start items-center gap-10 p-32P w-[75dvw] h-288H bg-white text-dark-grayish-blue font-bold 2xs:w-[86dvw] md:hidden">
              <div className="absolute -top-16I right-[20px] z-20 before:content-[''] before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[40px] before:border-r-[0px] before:border-b-[40px] before:border-l-transparent before:border-r-transparent before:border-b-white"></div>
              <li className="relative z-20">About</li>
              <li>Services</li>
              <li>Projects</li>
              <li
                id="contact"
                className="w-128W group relative translate-x-[20%] text-black uppercase font-bold cursor-pointer"
              >
                <span className="absolute z-10 text-sm group-hover:text-black group-hover:opacity-70">
                  Contact
                </span>
                <div className="z-0 absolute bg-yellow -top-[12px] -left-[28px] w-128W h-48H px-32P py-16P rounded-full group-hover:opacity-90"></div>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden z-10 justify-center items-center space-x-10 md:flex">
          <li className="">About</li>
          <li>Services</li>
          <li className="mr-16">Projects</li>
          <li
            id="contact"
            className="w-128W group relative -top-8I text-black uppercase font-bold cursor-pointer"
          >
            <span className="absolute z-10 text-sm hover:opacity-100 group-hover:text-white">
              Contact
            </span>
            <div className="z-0 absolute -top-[12px] -left-[28px] w-128W h-48H bg-white px-32P py-16P rounded-full group-hover:opacity-10"></div>
          </li>
        </ul>
      </nav>

      <h1 className="relative z-5 text-white text-center mx-auto my-64M text-2xl lg:text-3xl uppercase font-bold tracking-widest">
        We are creatives
      </h1>
      <img
        src={arrow}
        className="relative -top-16I z-5 mx-auto w-[24px]"
        aria-hidden="true"
        alt=""
      />
    </header>
  );
}
