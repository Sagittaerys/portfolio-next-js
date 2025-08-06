import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export default function Footer(){
  return(
    <div className="container font-mono text-center mt-10 p-5 md:p-10 text-white">
          <p className="nav-list">Copyright © 2025 Olamilekan Aremu -  <span className="test-font">Sagittaerys!⚡.</span></p>

          <div className="flex justify-center gap-4 mt-5">
            <a href="mailto:aremu0235@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <CiMail />
            </a>
            <a href="https://www.instagram.com/sagittaerys_?igsh=MTkxbm5xd3NrZGVobA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/sagittaric?s=21"
            target="_blank"
            rel="noopener noreferrer"
            >
             <FaXTwitter />
            </a>
            <a href="https://github.com/sagittaerys"
            target="_blank"
            rel="noopener noreferrer"
            >
            <IoLogoGithub />
            </a>
          </div>
    </div>
  )
}