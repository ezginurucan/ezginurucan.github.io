// components/Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  fab,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  config.autoAddCss = false;
  library.add(fas, fab);
  return (
    <footer className=" bg-gray-900 p-4 h-2/3 text-white w-full">
      <div className="grid grid-cols-4 justify-items-center p-4">
        <Link href="https://www.linkedin.com/in/ezginurucan" passHref className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="  w-1/2 sm:w-1/6 p-2 bg-contain  text-sm text-orange-700 hover:rounded-full hover:bg-gray-700 hover:rounded-lg hover:text-orange-500  "
          />
        </Link>
        <Link href="https://www.instagram.com/nurezgi_ucn" passHref className="flex flex-col items-center justify-center" >
          <FontAwesomeIcon
            icon={faInstagram}
            className="  w-1/2 sm:w-1/6   p-2 bg-contain  text-sm text-orange-700 hover:rounded-full hover:bg-gray-700 hover:rounded-lg hover:text-orange-500  "
          />
        </Link>
        <Link href="https://github.com/ezginurucan" passHref className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faGithub}
            className="  w-1/2 sm:w-1/6   p-2 bg-contain  text-sm text-orange-700 hover:rounded-full hover:bg-gray-700 hover:rounded-lg hover:text-orange-500  "
          />
        </Link>
        <Link href="mailto:ezginurucan55@gmail.com" passHref className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className=" w-1/2 sm:w-1/6  p-2 bg-contain text-sm text-orange-700 hover:rounded-full hover:bg-gray-700 hover:rounded-lg hover:text-orange-500  "
          />
        </Link>
      </div>
      <div className="text-center my-2">© Copyright 2024 Ezginur UCAN </div>
    </footer>
  );
}

export default Footer;
