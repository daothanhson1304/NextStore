import ProductCard from '@/components/shared/product-card';
import { ROUTE_PATHS } from '@/constants';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';

export default async function ProductsSection({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const newItems = await fetch('http://localhost:3000/api/products/new');
  const newItemsData = await newItems.json();
  return (
    <section className={cn('max-w-screen-xl mx-auto pt-16 pb-9', className)}>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold text-uppercase'>{title}</h2>
        <Link href={ROUTE_PATHS.PRODUCTS}>View all</Link>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {newItemsData.map((item: any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
