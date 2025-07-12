'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@workspace/ui/components/drawer';
import { Button } from '@workspace/ui/components/button';
import { Minus, Plus, X } from 'lucide-react';

export default function CartDrawer() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <DrawerTitle className='text-sm font-mono tracking-tight cursor-pointer relative'>
          Cart
          {/* Cart Badge */}
          <span className='absolute -top-2 -right-3 inline-flex items-center justify-center text-xs bg-black text-white rounded-full w-5 h-5'>
            1
          </span>
        </DrawerTitle>
      </DrawerTrigger>

      <DrawerContent className='max-w-md ml-auto w-full h-full bg-white flex flex-col p-6 font-mono text-sm text-black'>
        <div className='relative h-full'>
          <div className='flex justify-between items-center'>
            <DrawerTitle className='text-2xl'>Cart (1)</DrawerTitle>
            <DrawerTrigger asChild>
              <button>
                <X className='w-6 h-6' />
              </button>
            </DrawerTrigger>
          </div>

          {/* Item */}
          <div className='flex flex-col gap-4 overflow-y-auto h-[calc(100vh-200px)]'>
            <div className='flex mt-6 gap-4 border-b pb-4'>
              <img
                src='/your-product.jpg'
                alt='T-shirt'
                className='w-32 h-32 bg-gray-200 object-cover'
              />
              <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                  <p className='font-bold'>1017 SLUB POCKET T-SHIRT</p>
                  <span className='text-sm'>$32</span>
                </div>
                <p>230 GSM Jersey</p>
                <p>Size: S</p>
                <p>Color: BLACK</p>

                {/* Quantity control */}
                <div className='flex items-center gap-1 mt-2'>
                  <button className='border rounded-full px-2 text-sm'>
                    <Minus className='w-3 h-3' />
                  </button>
                  <span className='px-2'>1</span>
                  <button className='border rounded-full px-2 text-sm'>
                    <Plus className='w-3 h-3' />
                  </button>
                  <button className='ml-auto text-gray-500 hover:underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className='flex mt-6 gap-4 border-b pb-4'>
              <img
                src='/your-product.jpg'
                alt='T-shirt'
                className='w-32 h-32 bg-gray-200 object-cover'
              />
              <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                  <p className='font-bold'>1017 SLUB POCKET T-SHIRT</p>
                  <span className='text-sm'>$32</span>
                </div>
                <p>230 GSM Jersey</p>
                <p>Size: S</p>
                <p>Color: BLACK</p>

                {/* Quantity control */}
                <div className='flex items-center gap-1 mt-2'>
                  <button className='border rounded-full px-2 text-sm'>
                    <Minus className='w-3 h-3' />
                  </button>
                  <span className='px-2'>1</span>
                  <button className='border rounded-full px-2 text-sm'>
                    <Plus className='w-3 h-3' />
                  </button>
                  <button className='ml-auto text-gray-500 hover:underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className='flex mt-6 gap-4 border-b pb-4'>
              <img
                src='/your-product.jpg'
                alt='T-shirt'
                className='w-32 h-32 bg-gray-200 object-cover'
              />
              <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                  <p className='font-bold'>1017 SLUB POCKET T-SHIRT</p>
                  <span className='text-sm'>$32</span>
                </div>
                <p>230 GSM Jersey</p>
                <p>Size: S</p>
                <p>Color: BLACK</p>

                {/* Quantity control */}
                <div className='flex items-center gap-1 mt-2'>
                  <button className='border rounded-full px-2 text-sm'>
                    <Minus className='w-3 h-3' />
                  </button>
                  <span className='px-2'>1</span>
                  <button className='border rounded-full px-2 text-sm'>
                    <Plus className='w-3 h-3' />
                  </button>
                  <button className='ml-auto text-gray-500 hover:underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className='flex mt-6 gap-4 border-b pb-4'>
              <img
                src='/your-product.jpg'
                alt='T-shirt'
                className='w-32 h-32 bg-gray-200 object-cover'
              />
              <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                  <p className='font-bold'>1017 SLUB POCKET T-SHIRT</p>
                  <span className='text-sm'>$32</span>
                </div>
                <p>230 GSM Jersey</p>
                <p>Size: S</p>
                <p>Color: BLACK</p>

                {/* Quantity control */}
                <div className='flex items-center gap-1 mt-2'>
                  <button className='border rounded-full px-2 text-sm'>
                    <Minus className='w-3 h-3' />
                  </button>
                  <span className='px-2'>1</span>
                  <button className='border rounded-full px-2 text-sm'>
                    <Plus className='w-3 h-3' />
                  </button>
                  <button className='ml-auto text-gray-500 hover:underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className='flex mt-6 gap-4 border-b pb-4'>
              <img
                src='/your-product.jpg'
                alt='T-shirt'
                className='w-32 h-32 bg-gray-200 object-cover'
              />
              <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                  <p className='font-bold'>1017 SLUB POCKET T-SHIRT</p>
                  <span className='text-sm'>$32</span>
                </div>
                <p>230 GSM Jersey</p>
                <p>Size: S</p>
                <p>Color: BLACK</p>

                {/* Quantity control */}
                <div className='flex items-center gap-1 mt-2'>
                  <button className='border rounded-full px-2 text-sm'>
                    <Minus className='w-3 h-3' />
                  </button>
                  <span className='px-2'>1</span>
                  <button className='border rounded-full px-2 text-sm'>
                    <Plus className='w-3 h-3' />
                  </button>
                  <button className='ml-auto text-gray-500 hover:underline'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='mt-6 space-y-4 absolute bottom-0 left-0 right-0'>
            <div className='flex justify-between text-base font-medium'>
              <span>Total</span>
              <span>$32</span>
            </div>

            <div className='text-xs text-gray-500'>
              <p>
                Delivery:{' '}
                <span className='float-right'>Calculated at checkout</span>
              </p>
              <p className='mt-2'>All sale items are final purchase</p>
            </div>

            <label className='flex items-center gap-2 text-sm'>
              <input type='checkbox' />
              <span>
                I accept{' '}
                <a href='#' className='underline'>
                  terms & conditions
                </a>
              </span>
            </label>

            <Button className='w-full rounded-full py-6 text-base font-mono bg-black text-white hover:opacity-90'>
              Check out
            </Button>

            {/* Payment icons (replace with real images if needed) */}
            <div className='flex justify-between pt-4'>
              <div className='bg-black text-white px-4 py-2 rounded'> Pay</div>
              <div className='bg-black text-white px-4 py-2 rounded'>💳</div>
              <div className='bg-black text-white px-4 py-2 rounded'>
                PayPal
              </div>
              <div className='bg-black text-white px-4 py-2 rounded'>VISA</div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
