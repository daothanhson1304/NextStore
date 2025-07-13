import { ROUTE_PATHS } from '@/constants';
import Link from 'next/link';
import { AnnouncementBar } from '../landing/announcement-bar';
import { MenuDrawer } from './menu-drawer';
import CartDrawer from './cart-drawer';

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <div className='w-full bg-background sticky top-0 z-50'>
        <header className='max-w-screen-xl mx-auto py-8 flex items-center justify-between text-sm font-mono tracking-tight'>
          {/* Left menu */}
          <nav className='flex items-center gap-6'>
            <MenuDrawer />
            <Link href='/about' className='hover:underline'>
              About
            </Link>
            <Link href='/collections' className='hover:underline'>
              Categories
            </Link>
          </nav>

          {/* Center logo */}
          <Link
            href={ROUTE_PATHS.HOME}
            className='text-2xl font-semibold cursor-pointer text-brand'
          >
            Happy Paw
          </Link>

          {/* Right menu */}
          <div className='flex items-center gap-6'>
            <Link href='/search' className='hover:underline'>
              Search
            </Link>
            <Link href='/account' className='hover:underline'>
              Account
            </Link>
            <CartDrawer />
          </div>
        </header>
      </div>
    </>
  );
}
