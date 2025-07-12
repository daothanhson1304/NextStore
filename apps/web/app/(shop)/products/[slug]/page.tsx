import { Metadata } from 'next';
import { ProductDetail } from './components/product-detail';

export const metadata: Metadata = {
  title: 'Products | House of blanks',
  description: 'Browse our products',
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <ProductDetail />;
}
