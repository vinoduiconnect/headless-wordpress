import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from 'next/image';
import Link from "next/link";
export default function Footer() {
  return (
    //  Footer container 
    <footer
      className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left footer">
      <div className="container pt-6">
        <div className="grid place-items-start xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mob-listing">

          <div className="mb-6" >
            <Image src="/DataTracksLogo_White.png"
              alt="DTlogo"
              className="dark:invert"
              width={110}
              height={40}
              priority
            />
            <div className="flex justify-between ">
              <Link href="mailto:enquiry@datatracks.com" className="text-white pt-3">
                enquiry@datatracks.com
              </Link>
            </div>

          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-white">Countries</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!">US</a>
              </li>
              <li>
                <a href="#!">EU</a>
              </li>
              <li>
                <a href="#!">UK</a>
              </li>
              <li>
                <a href="#!">Ireland</a>
              </li><li>
                <a href="">Singapore
                </a>
              </li>
              <li>
                <a href="#!">Malaysia
                </a>
              </li>
              <li>
                <a href="#!">India
                </a>
              </li>
              <li>
                <a href="#!">South Africa</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 text-white font-bold">Services</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!">ESEF Reporting</a>
              </li>
              <li>
                <a href="#!">SEC Reporting</a>
              </li>
              <li>
                <a href="#!">CIPC iXBRL Filing</a>
              </li>
              <li>
                <a href="#!">ACRA Filing</a>
              </li>
              <li>
                <a href="#">SSM MBRS Filing
                </a>
              </li>
              <li>
                <a href="#!">MCA XBRL Reporting
                </a>
              </li><li>
                <a href="#!">HMRC CT600 Filing
                </a>
              </li><li>
                <a href="#!">Revenue Ireland CT1 Filing
                </a>
              </li><li>
                <a href="#!">CBC Reporting
                </a>
              </li><li>
                <a href="#!">ESG Reporting
                </a>
              </li><li>
                <a href="#!">FATCA/CRS Reporting
                </a>
              </li><li>
                <a href="#!">Data Act

                </a>
              </li>
              <li>
                <a href="#!">FTA
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-white">Software</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!">SEC Reporting</a>
              </li>
              <li>
                <a href="#!">FERC Reporting</a>
              </li>
              <li>
                <a href="#!">ESEF Reporting</a>
              </li>
              <li>
                <a href="#!">AIFMD Reporting</a>
              </li>
              <li>
                <a href="">CRD IV Reporting
                </a>
              </li>
              <li>
                <a href="#!">MIFID II Reporting
                </a>
              </li>
              <li>
                <a href="#!">Solvency Reporting
                </a>
              </li>
              <li>
                <a href="#!">CIPC iXBRL Software
                </a>
              </li>
              <li>
                <a href="#!">FATCA/CRS Reporting
                </a>
              </li>
              <li>
                <a href="#!">CBC Reporting
                </a>
              </li>
              <li><a href="">MTD for VAT
              </a></li>
              <li><a href="">ESG Reporting
              </a></li>
              <li>
                <a href="#!">MBRS Software

                </a>
              </li>
              <li>
                <a href="#!">FTA
                </a>
              </li>
            </ul>
          </div>


          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-white">Resources</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Blog
                </a>
              </li>
              <li>
                <a href="#!">Events
                </a>
              </li>
              <li>
                <a href="#!">News
                </a>
              </li>
              <li>
                <a href="#!">Brochures</a>
              </li>
              <li>
                <a href="#!">
                  Contact</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-white">About us</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!">Discover Us
                </a>
              </li>
              <li>
                <a href="#!">Leadership
                </a>
              </li>
              <li>
                <a href="#!">Partnerships
                </a>
              </li>
              <li>
                <a href="#!">Our Culture</a>
              </li>
              <li>
                <a href="#!">
                  Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section  */}

      <div className="flex container justify-between items-center pb-6 copyright" style={{
           borderTop: '1px solid #e7e7e7',
        }}>
         <div className="flex justify-between items-center gap-2 pt-4">
         <Image src="/logo-xbrl-member.webp"
              alt="DTlogo"
              className="dark:invert"
              width={60}
              height={60}
              priority
            />
            <Image src="/xbrl-certified-logo.png"
              alt="DTlogo"
              className="dark:invert mob-logo"
              width={100}
              height={36}
              priority
            />
            <Image src="/logo-tuv.png"
              alt="DTlogo"
              className="dark:invert"
              width={60}
              height={60}
              priority
            />
            <Image src="/logo-tuv1.png"
              alt="DTlogo"
              className="dark:invert"
              width={60}
              height={60}
              priority
            />
      </div>
        <div className="w-full text-white p-4 text-right mob-text-align" style={{
          color: '#9e9e9e',
        }}>
          Governance | Privacy Policy | Terms of Use | Copyright © DataTracks 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
