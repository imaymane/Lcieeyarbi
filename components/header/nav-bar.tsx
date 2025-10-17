import MainMenu from "./main-menu";
import { FaLinkedin } from 'react-icons/fa';

function NavBar({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center justify-between py-1 px-20 bg-slate-100 z-40">
      <div className="flex flex-row items-center justify-start">
        <MainMenu activeIndex={activeIndex} />
      </div>
      <div className="flex flex-row items-center justify-end">
        <span className="mr-2">Linkedin</span>
        <a
          href="https://www.linkedin.com/company/lcie-laboratory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
