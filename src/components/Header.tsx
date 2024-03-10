'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import LogoButton from './Buttons/LogoButton';
import CloseSideMenuButton from './Buttons/CloseSideMenuButton';
import OpenSideMenuButton from './Buttons/OpenSideMenuButton';
import NavBarLink from './Buttons/NavBarLink';
import NavSideMenuLink from './Buttons/NavSideMenuLink';
import { Meteors } from './Meteors';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function PortfolioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='relative overflow-hidden bg-white dark:bg-gray-900'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <LogoButton />
        <div className='flex lg:hidden'>
          <OpenSideMenuButton onPress={setMobileMenuOpen} />
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <ThemeToggle />
          {navigation.map((item) => (
            <NavBarLink key={item.name} name={item.name} href={item.href} />
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <LogoButton />
            <CloseSideMenuButton onPress={setMobileMenuOpen} />
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <NavSideMenuLink
                    key={item.name}
                    name={item.name}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Meteors number={15} />
    </header>
  );
}
