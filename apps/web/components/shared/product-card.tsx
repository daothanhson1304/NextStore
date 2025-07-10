'use client';

import { Badge } from '@workspace/ui/components/badge';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  material: string;
  price: number;
  comparePrice: number;
  discount?: string;
  image: string;
  colors: string[];
  sizes: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='space-y-3'>
      {/* Image & Tag */}
      <div className='relative w-full aspect-square bg-muted overflow-hidden rounded-md'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
        {product.discount && (
          <Badge className='absolute bottom-2 right-2 bg-muted-foreground text-white rounded-full px-2 text-xs font-mono tracking-wide'>
            {product.discount}
          </Badge>
        )}
      </div>

      {/* Name & material */}
      <div className='text-sm'>
        <h3 className='font-semibold'>{product.name}</h3>
        <p className='text-xs text-muted-foreground'>{product.material}</p>
      </div>

      {/* Price */}
      <div className='flex items-center gap-2 text-sm'>
        <span className='line-through text-muted-foreground'>
          ${product.comparePrice}
        </span>
        <span className='font-medium'>${product.price}</span>
      </div>

      {/* Sizes (if any) */}
      {product.sizes.length > 0 && (
        <div className='flex justify-center items-center gap-3 rounded-full bg-gray-100 px-2 py-1 text-xs font-mono text-muted-foreground'>
          {product.sizes.map(size => (
            <span key={size}>{size}</span>
          ))}
        </div>
      )}

      {/* Colors */}
      <div className='flex items-center gap-1 mt-1'>
        {product.colors.map((color, i) => (
          <div
            key={i}
            className='w-4 h-4 border border-gray-400 rounded-sm'
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
