import useClickOutside from '@/hooks/useClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Button, { Variant } from '../../ui/button';
import Hamburger from './hamburger';
import LeftPanel from './left-panel';
import RightPanel from './right-panel';

export interface EntryProps {
  title: string;
  href: string;
  featured?: boolean;
  variant?: Variant;
}

interface Props {
  entries: Array<EntryProps>;
}

const disableScroll = () => {
  window.onscroll = () => {
    window.scrollTo(0, 0);
  };
};

function enableScroll() {
  window.onscroll = () => {};
}

const Menu: React.FC<Props> = ({ entries }) => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  useClickOutside(
    menuRef,
    () => {
      setIsOpened(false);
    },
    { exceptions: [hamburgerRef] },
  );

  return (
    <>
      <div className="sticky top-0 z-50" ref={menuRef}>
        <LeftPanel isOpened={isOpened} />
        <RightPanel entries={entries} isOpened={isOpened} />
      </div>
      <nav className="text-neutral-800 sm:mx-16 mx-8">
        <div className="flex tems-center justify-between flex-row py-4">
          <div className="flex flex-row items-center space-x-4 xl:space-x-8">
            <div className="relative w-full flex flex-row items-center justify-between py-6">
              <Link onClick={enableScroll} href="/">
                <div className="cursor-pointer relative w-48 xl:w-56 h-24">
                  <Image
                    src="/img/atomics_complete.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="Atomics Logo"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className={`flex items-center justify-start space-x-8`}>
            <div className="hidden md:flex space-x-3">
              {entries
                .filter((e) => e.featured)
                .map((entry) => (
                  <Link key={entry.href} href={entry.href}>
                    <Button variant={entry.variant}>{entry.title}</Button>
                  </Link>
                ))}
            </div>
            <div className="z-50" ref={hamburgerRef}>
              <Hamburger
                isOpened={isOpened}
                onClick={(e) => {
                  isOpened ? enableScroll() : disableScroll();
                  setIsOpened(!isOpened);
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
