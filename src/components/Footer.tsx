import Wrap from "./Wrap";
import Logo from "./Logo";
import { navLinks } from "../constants/navLinks";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white pt-10 mt-auto">
      <Wrap>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Column 1: Info */}
          <div>
            <Logo />
            <p className="text-gray-400 w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Column 2: Quick Links */}
            <div>
              <h2 className="font-bold text-xl mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {navLinks.map((data) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="text-gray-400 hover:text-white transition duration-300 ease-in"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: GetInTouch */}
            <div>
              <h2 className="font-bold text-xl mb-4">Get In Touch</h2>
              <p className=""> yourmom@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} IT Creation. All rights reserved.
          </p>
        </div>
      </Wrap>
    </footer>
  );
};

export default Footer;
