// app/products/[slug]/ProductDetail.tsx

import Image from 'next/image';
import ProductDisplay from './product-display';
import ProductControls from './product-control';
import Breadcrumb from '@/components/shared/breadcrumb';
import ProductsSection from '@/components/shared/product-section';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  { label: 'White', value: '#ffffff' },
  { label: 'Black', value: '#000000' },
];

const images = [
  'https://www.houseofblanks.com/cdn/shop/files/1017SlubPocketT-Shirt_Black_01.jpg?v=1749668273&width=1646',
  'https://www.houseofblanks.com/cdn/shop/files/1017-Slub-Pocket-T-Shirt_Black_01.jpg?v=1749668273&width=1646',
  'https://www.houseofblanks.com/cdn/shop/files/1017-Slub-Pocket-T-Shirt_Black_02.jpg?v=1749668273&width=1646',
  'https://www.houseofblanks.com/cdn/shop/files/1017SlubPocketT-Shirt_Black_02.jpg?v=1749668269&width=1646',
];

export function ProductDetail() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8'>
      {/* Image gallery */}
      <Breadcrumb />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((src, i) => (
          <div
            key={i}
            className='aspect-square relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px]'
          >
            <Image
              src={src}
              alt='product'
              priority
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>

      {/* Info */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <ProductDisplay />
        <ProductControls />
      </div>
      <ProductsSection
        title='YOU MAY ALSO LIKE'
        className='max-w-[unset] w-full'
      />
    </div>
  );
}
