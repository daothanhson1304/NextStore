import { Metadata } from 'next';
import { ProductDetail } from './components/product-detail';

export const metadata: Metadata = {
  title: 'Products | Happy Paw',
  description: 'Browse our products',
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail />;
}
