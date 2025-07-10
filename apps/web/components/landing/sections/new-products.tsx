import ProductCard from '@/components/shared/product-card';

export default async function NewProductsSection() {
  const newItems = await fetch('http://localhost:3000/api/products/new');
  const newItemsData = await newItems.json();
  return (
    <section className='max-w-page mx-auto pt-16 pb-9'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>New Items</h2>
        <button>View all</button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {newItemsData.map((item: any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
