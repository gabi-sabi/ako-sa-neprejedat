import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gradient-to-r
    
    from-green-400 via-yellow-400 to-orange-400"
    >
      <a
        href="/"
        className="flex items-center h-10 px-10  font-bold  text-white hover:opacity-90"
      >
        Ako sa neprejedať
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <a href="#" className="hover:text-gray-500">
          Prvá pomoc
        </a>
        <a href="#" className="hover:text-gray-500">
          Podporná skupina
        </a>
        <a href="#" className="hover:text-gray-500">
          Konzultácia
        </a>
        <a href="#" className="hover:text-gray-500">
          Hry
        </a>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="#" className="hover:text-gray-500">
              Prvá pomoc
            </a>
            <a href="#" className="hover:text-gray-500">
              Podporná skupina
            </a>
            <a href="#" className="hover:text-gray-500">
              Konzultácia
            </a>
            <a href="#" className="hover:text-gray-500">
              Hry
            </a>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </>
        )}
      </nav>
    </header>
  );
};
