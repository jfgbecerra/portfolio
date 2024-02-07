import Link from 'next/link';

type SocialLinkProps = {
  name: string;

  href: string;

  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
};

export default function SocialLink({ name, href, Icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className='text-gray-400 hover:text-gray-500'
    >
      <span className='sr-only'>{name}</span>
      <Icon className='h-6 w-6' aria-hidden='true' />
    </Link>
  );
}
