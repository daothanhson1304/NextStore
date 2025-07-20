'use client';

import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='space-y-3'>
      {/* Image & Tag */}
      <div
        className='relative w-full aspect-square bg-muted overflow-hidden rounded-md'
        onMouseEnter={() => {
          console.log('onMouseEnter');
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-cover'
            sizes='100vw'
            priority
          />
        </Link>
        {((product.discount && !isHovered) || product.sizes.length === 0) && (
          <Badge className='absolute bottom-2 right-2 bg-brand text-white rounded-full px-2 text-xs font-mono tracking-wide'>
            {product.discount}
          </Badge>
        )}
      </div>

      {/* Name & material */}
      <Link href={`/products/${product.id}`}>
        <h3 className='font-semibold text-xl'>{product.name}</h3>
      </Link>

      {/* Price */}
      <div className='flex items-center gap-2 text-lg mt-2'>
        <span className='line-through text-muted-foreground'>
          ${product.comparePrice}
        </span>
        <span className='font-medium text-brand'>${product.price}</span>
        <Button className='bg-sky-100 text-sky-700 font-bold px-4 py-2 rounded-full'>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
