import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections | Happy Paw',
  description: 'Browse our collections',
};

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Gọi API
  const res = await fetch(`http://localhost:3000/api/collections`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const collection = await res.json();

  console.log(collection);

  if (!collection) return notFound();

  return (
    <main className='max-w-screen-xl mx-auto py-10'>
      {/* Tiêu đề collection */}
      <h1 className='text-2xl font-mono font-bold mb-6'>{slug}</h1>

      <div className='flex justify-between mb-6 items-center'>
        <p className='text-sm text-gray-500 mb-6'>
          {collection?.length ?? 0} items
        </p>
        <div className='flex gap-6 items-center'>
          <button className='flex items-center gap-2 hover:opacity-80'>
            <span>Filter</span>
            <SlidersHorizontal className='w-4 h-4' />
          </button>

          {/* Sort by dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2 hover:opacity-80'>
              <span>Sort by</span>
              <ChevronDown className='w-4 h-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='font-mono text-sm bg-primary'
            >
              <DropdownMenuItem className='cursor-pointer'>
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Best Sellers
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Lưới sản phẩm */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {collection?.map((product: any) => (
          <div key={product.id} className='space-y-1 text-sm font-mono'>
            <div className='relative w-full aspect-square bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
              />
              {product.discount && (
                <span className='absolute bottom-2 right-2 bg-[#715c42] text-white text-xs px-2 py-0.5 rounded-sm'>
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className='mt-2'>
              <p>{product.name}</p>
              <p className='text-xs text-gray-500'>{product.material}</p>
              <div className='flex gap-2 text-sm'>
                {product.discountPrice ? (
                  <>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                    <span>${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
