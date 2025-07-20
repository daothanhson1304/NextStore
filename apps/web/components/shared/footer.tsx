import { Input } from '@workspace/ui/components/input';
import { Checkbox } from '@workspace/ui/components/checkbox';
import { Button } from '@workspace/ui/components/button';

export default function Footer() {
  return (
    <footer className='bg-primary '>
      <div className='max-w-screen-xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Column 1 */}
        <div>
          <h2 className='text-xl font-bold tracking-tight'>Happy Paw</h2>
          <p className='mt-2  leading-relaxed text-muted-foreground'>
            Happy Paw is a factory brand produced by Roopa Knitting Mills, the
            makers of the world's highest quality knit fabrics and apparel.
          </p>
          <div className='mt-4'>
            <h3 className='font-semibold'>Social</h3>
            <p className=' mt-1 underline cursor-pointer'>Instagram</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className='font-semibold underline'>Information</h3>
          <ul className='mt-2 space-y-1 '>
            <li>
              <a href='#' className='hover:underline'>
                Size Guide
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                FAQ
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Wholesale
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className='font-semibold'>
            Join our newsletter to stay up to date on features and releases.
          </h3>
          <div className='mt-4 flex items-center gap-2 border-b pb-1 w-full max-w-md'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 bg-transparent border-none outline-none py-2 placeholder:text-gray-600'
            />
            <Button
              variant='ghost'
              className='p-0 text-muted-foreground  hover:underline'
            >
              Subscribe
            </Button>
          </div>
          <div className='flex items-center text-base space-x-2 mt-3'>
            <Checkbox id='terms' />
            <label htmlFor='terms' className='text-base text-muted-foreground'>
              I have read and accept the{' '}
              <a href='#' className='underline'>
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='max-w-screen-xl mx-auto'>
        <div className='border-t border-black/20 text-muted-foreground py-4 flex flex-col md:flex-row justify-between items-center gap-2 '>
          <p>© 2025 Happy Paw. All Rights Reserved</p>
          <div className='flex gap-4'>
            <a href='#' className='underline'>
              Terms of Service
            </a>
            <a href='#' className='underline'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
