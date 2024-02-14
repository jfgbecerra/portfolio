import Link from 'next/link';

type NavSideMenuLinkProps = {
  name: string;

  href: string;
};

export default function NavSideMenuLink({ name, href }: NavSideMenuLinkProps) {
  return (
    <Link
      key={name}
      href={href}
      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
    >
      {name}
    </Link>
  );
}
