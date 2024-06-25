import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import ProductsTypicalList from '@/components/products/typical-list';
import Feedbacks from '@/components/feedback/feedbacks';

import { productModel, feedbackModel } from '@/models';

export default async function Page() {
  const products = await productModel.getTypicalProducts();
  const feedbacks = await feedbackModel.getFeedbacks();
  return (
    <>
      {/* hero */}
      <div className='w-full'>
        <Image
          className='w-full'
          src='/banner-1.webp'
          alt=''
          width='1280'
          height='680'
        />
      </div>
      {/* our products */}
      <div id='products' className='w-full bg-white'>
        <div className='w-full self-center mx-auto py-10 max-w-7xl flex flex-col'>
          <div className='flex justify-center items-center mb-4'>
            <h3 className='text-3xl font-sans'>Our <b>Products</b></h3>
          </div>
          <ProductsTypicalList products={products} />
          <div className='flex justify-center items-center'>
            <Link
              className={clsx(
                'inline-flex whitespace-nowrap items-center justify-center font-bold transition-colors focus-visible:outline-none',
                'bg-blue-700 text-white hover:bg-blue-700/90',
                'h-10 px-6 py-2 rounded-md'
              )}
              href='/products'
            >
              Want to See More
            </Link>
          </div>
        </div>
      </div>
      {/* our company */}
      <div id='about' className='w-full bg-neutral-100'>
        <div className='self-center mx-auto py-10 max-w-7xl flex flex-col'>
          <div className='flex justify-center items-center mb-8'>
            <h3 className='text-3xl font-sans'>Our <b>Company</b></h3>
          </div>
          <About />
        </div>
      </div>
      {/* our services? sale products? / buy agent? */}
      {/* our customers */}
      <div className='w-full bg-white'>
        <div className='self-center mx-auto py-10 max-w-7xl flex flex-col'>
          <div className='flex justify-center items-center mb-10'>
            <h3 className='text-3xl font-sans'>Customers Who <b>Trust Us</b></h3>
          </div>
          <Feedbacks feedbacks={feedbacks} />
        </div>
      </div>
      {/* contact us */}
      <div className='w-full bg-white'>
        <div className='self-center mx-auto py-10 max-w-7xl flex flex-col'>
          <div className='flex justify-center items-center mb-10'>
            <h3 className='text-3xl font-sans'>Contact us to <b>Get Started</b></h3>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}
