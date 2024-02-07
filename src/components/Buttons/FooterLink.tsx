import Link from 'next/link';

type FooterLinkProps = {
  name: string;

  href: string;
};

export default function FooterLink({ name, href }: FooterLinkProps) {
  return (
    <div key={name} className='pb-6'>
      <Link
        href={href}
        className='text-sm leading-6 text-gray-600 hover:text-gray-900'
      >
        {name}
      </Link>
    </div>
  );
}
