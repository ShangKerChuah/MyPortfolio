import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function Navlink({ href, label }: NavLinkProps) {
  return (
    <Link href={href}>
      <li className="nav-item ml-10 uppercase hover:border-b text-lg transition duration-200 ease-in-out">
        {label}
      </li>
    </Link>
  );
}
