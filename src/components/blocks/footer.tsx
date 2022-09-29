import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { EntryProps } from './menu';

interface FooterProps {
  entries: Array<EntryProps>;
}

const social = [
  {
    src: '/img/instagram.svg',
    alt: 'Instagram logo',
    href: '/',
  },
  {
    src: '/img/linkedin.svg',
    alt: 'Linkedin logo',
    href: '/',
  },
  {
    src: '/img/medium.svg',
    alt: 'Meium logo',
    href: '/',
  },
];

const Footer: React.FC<FooterProps> = ({ entries }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full bg-black sm:px-32 px-12 py-12 gap-y-5">
      <div className="w-1/3">
        <div className="relative w-48 h-48 self-start">
          <Image
            src={'/img/atomics-logo-positive.svg'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="block text-white font-bold text-lg mb-4">
          Síguenos en:
        </span>
        <ul className="flex gap-x-6">
          {social.map((img) => (
            <Link key={img.src} href={img.href}>
              <li className="cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  height={32}
                  width={32}
                  layout="fixed"
                  className="invert hover:scale-105 transition-all duration-150"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sm:w-1/3 text-center sm:self-end sm:order-none order-1 self-center">
        <span className="text-white text-sm w-full">Atomics © 2022</span>
      </div>
      <div className="w-1/3 sm:self-end self-start mb-8 sm:mb-0">
        <ul className="flex flex-col sm:items-end items-start sm:justify-end justify-start gap-y-4">
          {entries.map((entry) => (
            <li key={entry.href} className="text-white text-sm hover:underline">
              <Link href={entry.href}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
