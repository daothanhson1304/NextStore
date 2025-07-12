'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@workspace/ui/components/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@workspace/ui/components/drawer';

export function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction='left'>
      <DrawerTrigger asChild>
        <DrawerTitle className='text-sm font-mono tracking-tight cursor-pointer'>
          Shop
        </DrawerTitle>
      </DrawerTrigger>

      <DrawerContent className='bg-secondary-foreground backdrop-blur-sm text-white px-8 py-10 w-[320px] !border-r-0'>
        <div className='space-y-10'>
          {/* FEATURED */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Featured</h2>
            <ul className='space-y-2 ml-4'>
              <li>
                <DrawerClose asChild>
                  <Link href='/shop' className='hover:underline block'>
                    Shop all
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/products/new-arrivals'
                    className='hover:underline block'
                  >
                    New arrivals
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/products/best-sellers'
                    className='hover:underline block'
                  >
                    Best Sellers
                  </Link>
                </DrawerClose>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Categories</h2>
            <ul className='space-y-2 ml-4'>
              <li>
                <DrawerClose asChild>
                  <Link href='/collections' className='hover:underline block'>
                    All categories
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/t-shirts'
                    className='hover:underline block'
                  >
                    T-shirts
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/sweatshirts'
                    className='hover:underline block'
                  >
                    Sweatshirts
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/hoodies'
                    className='hover:underline block'
                  >
                    Hoodies
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/crewnecks'
                    className='hover:underline block'
                  >
                    Crewnecks
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/zip-sweatshirts'
                    className='hover:underline block'
                  >
                    Zip Sweatshirts
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/sweatpants'
                    className='hover:underline block'
                  >
                    Sweatpants
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/shorts'
                    className='hover:underline block'
                  >
                    Shorts
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/headwear'
                    className='hover:underline block'
                  >
                    Headwear
                  </Link>
                </DrawerClose>
              </li>
            </ul>
          </div>

          {/* SUMMER SALE */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Summer Sale</h2>
            <DrawerClose asChild>
              <Link href='/products/sale' className='hover:underline block'>
                Save up to 50% off →
              </Link>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
