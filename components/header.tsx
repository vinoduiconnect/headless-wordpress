import Link from "next/link";
import Image from 'next/image';
// import { FaFacebook, FaLinkedin, FaShareAlt } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
export default function Header() {
  return (
    <header className="bg-white mb-3 sticky w-full z-20 top-0 start-0 text-white pt-2">
      {/* Top Menu */}
      <div className="flex justify-between items-center px-4 " style={{
        borderBottom: '1px solid #e7e7e7', borderTop: '1px solid #e7e7e7'
      }}>
        {/* Logo */}
        <div className="flex items-center w-full justify-between pb-2">
          <Link href="/" className="text-xl font-bold mr-4">
            <Image src="/DTlogo-150x51.webp"
              alt="DTlogo"
              className="dark:invert"
              width={150}
              height={51}
              priority
            />
          </Link>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
          <div className="flex items-center justify-end space-x-4 topmenu-items ">
            <Link href="/">
              US
            </Link>
            <Link href="/">
              UK
            </Link>
            <Link href="/">
              Ireland
            </Link>
            <Link href="/">
              EU
            </Link>
            <Link href="/" >
              Singapore
            </Link>
            <Link href="/" >
              South Africa
            </Link>
            <Link href="/" >
              Malaysia
            </Link>
            <Link href="/" >
              India
            </Link>
            <Link href="/" >
              CbCR
            </Link>
          
            {/* Add other country links */}
          </div>
        </div>
        {/* Top Menu Ends */}


      </div>
      {/* Social Media Icons and Email Text */}
      <div className="flex justify-between items-center pl-4 bg-white-900">
        {/* Bottom Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 bottommenu-items">
            <li>
              <Link href="/" className=" active:text-blue-900 hover:text-gray-300 text-gray-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-300">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-300">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
        {/* Bottom Menu Ends */}
        {/* Social Media Icons */}


        {/* Email Text */}
        <div className="flex items-center text-white ml-4 ">
          <div className="social-link slid 
         ">
            {/* <FaShareAlt style={{color:'#111',}}/> */}
            <div className="social-links">
              <div className="flex justify-between gap-3">
                <a href="https://www.linkedin.com/company/datatracks/" target="_blank" aria-label="Share on LinkedIn">
              
                  {/* <FaLinkedin style={{color:'#111',}}/> */}
                </a>
                <a href="https://twitter.com/datatracks" target="_blank" aria-label="Share on Twitter">
                  
                  {/* <FaXTwitter style={{color:'#111',}}/> */}
                </a>
                <a href="https://www.facebook.com/DataTracks/" target="_blank" aria-label="Share on Facebook">
              {/* <FaFacebook style={{color:'#111',}}/> */}
                </a>
              </div>
            </div>
          </div>
        
        {/* Insert Email Address */}
        <div className="flex justify-between gap-5 header-btn-a">
          <Image src="/email-64.png"
            alt="DTlogo"
            className="dark:invert"
            width={18}
            height={18}
            priority

          />
          <Link href="mailto:enquiry@datatracks.com" >
            enquiry@datatracks.com
          </Link>
        </div>
      </div>
    </div>
      {/* End of Social Media Icons and Email Text */ }
    </header >
  );
}
