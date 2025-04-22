import Link from "next/link";

interface NavMenuProps {
  links: { href: string; label: string }[];
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ links, onClose }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li
          key={index}
          onClick={onClose}
          className="py-4 cursor-pointer hover:text-gray-500 transition duration-200"
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;