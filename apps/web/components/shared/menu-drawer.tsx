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

      <DrawerContent className='bg-primary backdrop-blur-sm text-foreground px-8 py-10 w-[320px] !border-r-0'>
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
                  <Link
                    href='/collections/pet-food'
                    className='hover:underline block'
                  >
                    Pet Food
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/feeding-supplies'
                    className='hover:underline block'
                  >
                    Feeding & Watering Supplies
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/toys'
                    className='hover:underline block'
                  >
                    Toys
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/beds-furniture'
                    className='hover:underline block'
                  >
                    Beds & Furniture
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/collars-leashes'
                    className='hover:underline block'
                  >
                    Collars, Leashes & Harnesses
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/pet-apparel'
                    className='hover:underline block'
                  >
                    Pet Apparel
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/grooming-supplies'
                    className='hover:underline block'
                  >
                    Grooming Supplies
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/health-wellness'
                    className='hover:underline block'
                  >
                    Health & Wellness
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/litter-housebreaking'
                    className='hover:underline block'
                  >
                    Litter & Housebreaking
                  </Link>
                </DrawerClose>
              </li>
              <li>
                <DrawerClose asChild>
                  <Link
                    href='/collections/travel-outdoor'
                    className='hover:underline block'
                  >
                    Travel & Outdoor
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
