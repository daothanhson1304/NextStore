import { ROUTE_PATHS } from '@/constants';
import Link from 'next/link';
import { AnnouncementBar } from '../landing/announcement-bar';
import { MenuDrawer } from './menu-drawer';
import CartDrawer from './cart-drawer';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <div className='w-full bg-background sticky top-0 z-50'>
        <header className='max-w-screen-xl mx-auto py-8 flex items-center justify-between text-lg font-mono tracking-tight'>
          {/* Left menu */}
          <nav className='flex items-center gap-6'>
            <MenuDrawer />
            <Link href='/about' className='hover:underline'>
              Best Sellers
            </Link>
            <Link href='/collections' className='hover:underline'>
              New Arrivals
            </Link>
          </nav>

          {/* Center logo */}
          <Link
            href={ROUTE_PATHS.HOME}
            className='text-2xl font-semibold cursor-pointer text-brand'
          >
            <Image src='/logo.svg' alt='Happy Paw' width={200} height={200} />
          </Link>

          {/* Right menu */}
          <div className='flex items-center gap-6'>
            <Link href='/search' className='hover:underline'>
              Blogs
            </Link>
            <Link href='/account' className='hover:underline'>
              About us
            </Link>
            <CartDrawer />
          </div>
        </header>
      </div>
    </>
  );
}
