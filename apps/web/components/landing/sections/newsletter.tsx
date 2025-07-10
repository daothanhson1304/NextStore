import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <section className='w-full bg-primary py-16 px-8'>
      <div className='max-w-page mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Left - Form */}
        <div className='space-y-6'>
          <h2 className='text-xl tracking-widest font-medium uppercase'>
            Subscribe to our newsletter
          </h2>

          {/* Email input */}
          <div className='flex border-b border-black max-w-md'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 bg-transparent border-none outline-none py-2 placeholder:text-gray-600'
            />
            <button className='text-sm uppercase tracking-wide text-black px-2'>
              Subscribe
            </button>
          </div>

          {/* Checkbox */}
          <label className='flex items-start text-sm gap-2 cursor-pointer max-w-md'>
            <input
              type='checkbox'
              className='mt-1 rounded border border-black focus:ring-0'
            />
            <span>
              I have read and accept the{' '}
              <a href='#' className='underline'>
                terms and conditions
              </a>
              .
            </span>
          </label>

          {/* Note */}
          <p className='text-xs max-w-md text-gray-700'>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        {/* Right - Image */}
        <div className='w-full h-auto'>
          <Image
            src='https://www.houseofblanks.com/cdn/shop/files/SarahKohler_HOB_Feb2023_Web-14.jpg?v=1715797674&width=1500' // bạn cần thay bằng đúng ảnh bạn đang dùng
            alt='Newsletter'
            width={800}
            height={600}
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
    </section>
  );
}
