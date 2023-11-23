import { Link } from "react-router-dom";
import { footer } from "../home/Data";

const Footer = () => {
  const date = new Date().getFullYear();
  const { socials, links, contacts } = footer;

  return (
    <footer className="py-4 bg-black text-white">
      <div className="max-w-5xl mx-auto py-4 border-b-2 border-gray-400 flex flex-col md:flex-row gap-8 md:justify-between md:px-4">
        <div className="flex-1 self-center px-8 md:px-0">
          <h5>
            <Link
              className="inline-block mb-4 text-base font-semibold"
              to={"/"}
            >
              Learning Africa
            </Link>
          </h5>

          <p className="mb-8 text-[#a3a3a3]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            maiores impedit odit illum qui ea ipsam distinctio officiis fuga
            vitae.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href="#"
                className="py-[5px] px-[10px] text-xl text-[#ff581f] bg-[#232220] transition duration-300 hover:text-[#ffffff] hover:bg-[#ff581f]"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 mr-4 px-8 md:px-0">
          <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
          <div>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="mb-4 flex text-[#a3a3a3] transition duration-300 hover:text-[#ff581f]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <address className="px-8 md:pr-8 lg:pr-0 md:px-0 md:text-right">
          <h4 className="mb-4 text-xl font-semibold">Contact Us</h4>

          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex md:justify-end gap-4 m-2 text-[#a3a3a3]"
            >
              <div className="py-1 text-xl text-[#ff581f]">{contact.icon}</div>
              <h5 className="">{contact.contact}</h5>
            </div>
          ))}
        </address>
      </div>

      <div className="px-4 pt-4 pb-2 text-sm text-center text-[#a3a3a3]">
        Copyright @{date} Learning Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;