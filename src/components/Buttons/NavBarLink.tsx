import Link from 'next/link';

type NavBarLinkProps = {
  name: string;

  href: string;
};

export default function NavBarLink({ name, href }: NavBarLinkProps) {
  return (
    <Link
      key={name}
      href={href}
      className='text-sm font-semibold leading-6 text-gray-900'
    >
      {name}
    </Link>
  );
}
