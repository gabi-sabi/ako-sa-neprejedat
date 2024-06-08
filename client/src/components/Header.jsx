import { useState } from "react";
import { UserRound } from "lucide-react";
import PropTypes from "prop-types";

const HeaderItem = ({ href, children, borderColor, textColor, border }) => {
  return (
    <li
      className={`${border} border-${borderColor} no-underline my-8 uppercase`}
    >
      <a
        href={href}
        className={`font-medium py-2 px-3 text-${textColor} hover:text-blue-700 md:p-0`}
      >
        {children}
      </a>
    </li>
  );
};

HeaderItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
};

const AvatarButton = () => {
  return (
    <button
      type="button"
      className="flex text-lg bg-white  rounded-full p-2 md:me-0 focus:ring-2 focus:ring-gray-30 "
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span className="sr-only">Open user menu</span>
      <UserRound color="grey" size="24" />
    </button>
  );
};

const headerItems = [
  {
    href: "/prvapomoc",
    text: "Prvá pomoc",
  },
  {
    href: "/skupina",
    text: "Podporná skupina",
  },
  {
    href: "/konzultacia",
    text: "Konzultácia",
  },
  {
    href: "/o-nas",
    text: "O nás",
  },
  {
    href: "/hry",
    text: "Hry",
  },
];

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav className="bg-transparent text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {headerItems.map((item, index) => (
                  <HeaderItem
                    key={index}
                    href={item.href}
                    textColor="black"
                    borderColor="black"
                    border="border-b"
                  >
                    {item.text}
                  </HeaderItem>
                ))}
              </ul>
            </div>
          </section>
          <a href="/" className="text-2xl font-semibold whitespace-nowrap">
            Ako sa neprejedať
          </a>
          <div className="DESKTOP-MENU items-center justify-between flex w-auto">
            <ul className=" hidden flex text-white no-underline p-4 md:p-0 bg-transparent md:space-x-8 lg:flex">
              {headerItems.map((item, index) => (
                <HeaderItem
                  key={index}
                  href={item.href}
                  textColor="white"
                  borderColor=""
                >
                  {item.text}
                </HeaderItem>
              ))}
            </ul>
          </div>
          <AvatarButton />
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
