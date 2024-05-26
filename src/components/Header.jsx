import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PropTypes from "prop-types";

const HeaderItem = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="font-medium py-2 px-3 text-white hover:text-blue-700 md:p-0"
      >
        {children}
      </a>
    </li>
  );
}

HeaderItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const AvatarButton = () => {
  return (
    <button
      type="button"
      className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span className="sr-only">Open user menu</span>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </button>
  );
}

const headerItems = [
  {
    href: "#",
    text: "Prvá pomoc",
  },
  {
    href: "#",
    text: "Podporná skupina",
  },
  {
    href: "#",
    text: "Konzultácia",
  },
  {
    href: "#",
    text: "Hry",
  },
];

export const Header = () => {
  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="text-2xl font-semibold whitespace-nowrap">
          Ako sa neprejedať
        </a>
        <div className="items-center justify-between flex w-auto">
          <ul className="flex p-4 md:p-0 bg-transparent md:space-x-8">
            {headerItems.map((item, index) => (
              <HeaderItem 
                key={index}
                href={item.href}                
              >
                {item.text}
              </HeaderItem>
            ))}
          </ul>
        </div>
        <AvatarButton />
      </div>
    </nav>
  );
};
