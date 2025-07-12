'use client';

import { useState } from 'react';
import { cn } from '@workspace/ui/lib/utils';

const COLORS = [
  '#000000',
  '#e8e8ea',
  '#d5d4d1',
  '#e4e0d8',
  '#202539',
  '#b6c3c2',
  '#e6c4c0',
  '#4e362d',
  '#193b2d',
  '#706b5b',
];

const SIZES = [
  { label: 'XS', value: 'XS', disabled: false },
  { label: 'S', value: 'S', disabled: false },
  { label: 'M', value: 'M', disabled: false },
  { label: 'L', value: 'L', disabled: false },
  { label: 'XL', value: 'XL', disabled: true },
  { label: 'XXL', value: 'XXL', disabled: false },
];

export default function ProductOptions({ className }: { className?: string }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={cn('space-y-6 text-sm font-mono text-black', className)}>
      {/* Color */}
      <div className='flex items-center gap-6'>
        <div className='mb-1'>Color</div>
        <div className='flex gap-2'>
          {COLORS.map(color => (
            <button
              key={color}
              className={cn(
                'w-6 h-6 rounded-sm border-2 border-gray-300',
                selectedColor === color && 'ring-2 ring-black ring-offset-1'
              )}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className='flex items-center gap-6'>
        <div className='mb-1'>Size</div>
        <div className='flex gap-2'>
          {SIZES.map(size => (
            <button
              key={size.value}
              disabled={size.disabled}
              onClick={() => !size.disabled && setSelectedSize(size.value)}
              className={cn(
                'px-3 py-1 border text-xs',
                selectedSize === size.value && 'border-black',
                size.disabled && 'opacity-50 line-through cursor-not-allowed'
              )}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart + Quantity */}
      <div className='flex gap-2 mt-4'>
        <button className='flex-1 bg-black text-white py-3 rounded-full'>
          Add to cart
        </button>
        <div className='flex items-center border rounded-full px-3'>
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className='text-lg px-2'
          >
            –
          </button>
          <span className='w-6 text-center'>{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className='text-lg px-2'
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
