// components/product-display.jsx
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@workspace/ui/components/accordion';
import { cn } from '@workspace/ui/lib/utils';

const ProductDisplay = ({ className }: { className?: string }) => {
  // You would typically fetch this data from an API or pass it as props
  const product = {
    name: '1017 SLUB POCKET T-SHIRT',
    material: '230 GSM Jersey',
    color: 'Black',
    originalPrice: 35,
    currentPrice: 32,
    description:
      'Our 1017 Slub Pocket T-Shirt is made with our incredibly textured 230 GSM slub cotton jersey. This t-shirt is a classic fit highlighted with a pocket for your daily needs. Milled and handcrafted in Canada.',
    features: [
      '230 GSM Slub Cotton Jersey',
      '240 GSM Cotton 1x1 Rib',
      '100% Cotton Canadian Milled Fabric',
      'Made in Canada',
    ],
    modelInfo:
      "Model is 6'1 175lbs (185cm / 79kg) and is wearing a size Large.",
  };

  return (
    <div className={cn('text-sm', className)}>
      {/* Product Title and Price Section */}
      <div className='mb-8'>
        <h1 className='text-3xl font-semibold mb-2'>{product.name}</h1>
        <p className='text-base text-gray-600 mb-1'>{product.material}</p>
        <p className='text-base text-gray-600 mb-4'>{product.color}</p>
        <div className='flex items-center space-x-2'>
          <span className='text-lg line-through text-gray-500'>
            ${product.originalPrice}
          </span>
          <span className='text-2xl font-bold'>${product.currentPrice}</span>
        </div>
      </div>

      {/* Product Description */}
      <div className='mb-8 leading-relaxed'>
        <p className='mb-4'>{product.description}</p>
        <ul className='list-disc list-inside space-y-1'>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Model Information */}
      <div className='mb-8 text-gray-600'>
        <p>{product.modelInfo}</p>
      </div>

      {/* Accordion Sections */}
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='uppercase tracking-wide text-sm'>
            Size Guide
          </AccordionTrigger>
          <AccordionContent>
            {/* Content for Size Guide */}
            <p className='text-gray-700 p-2'>
              Please refer to our detailed size chart for the best fit.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger className='uppercase tracking-wide text-sm'>
            Shipping Information
          </AccordionTrigger>
          <AccordionContent>
            {/* Content for Shipping Information */}
            <p className='text-gray-700 p-2'>
              Orders are typically processed within 1-2 business days. Shipping
              times vary based on destination.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger className='uppercase tracking-wide text-sm'>
            Fabric Information
          </AccordionTrigger>
          <AccordionContent>
            {/* Content for Fabric Information */}
            <p className='text-gray-700 p-2'>
              Made from 100% Canadian Milled Cotton. Pre-shrunk and garment dyed
              for a unique finish.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-4'>
          <AccordionTrigger className='uppercase tracking-wide text-sm'>
            FAQ
          </AccordionTrigger>
          <AccordionContent>
            {/* Content for FAQ */}
            <p className='text-gray-700 p-2'>
              Have questions? Check our frequently asked questions section or
              contact support.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-5'>
          <AccordionTrigger className='uppercase tracking-wide text-sm'>
            Return Policy
          </AccordionTrigger>
          <AccordionContent>
            {/* Content for Return Policy */}
            <p className='text-gray-700 p-2'>
              We offer returns within 30 days of purchase for unworn and
              unwashed items.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductDisplay;
