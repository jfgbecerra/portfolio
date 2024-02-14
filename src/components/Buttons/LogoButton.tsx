import Link from 'next/link';

export default function LogoButton() {
  return (
    <Link href='/' className='-m-1.5 p-1.5'>
      <span className='sr-only'>Mixtl</span>
      <img
        className='h-8 w-auto'
        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
        alt=''
      />
    </Link>
  );
}
