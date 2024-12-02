"use client";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logos.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow-xl bg-white'>
      <Link href={'/'}>
        <Image src={Logo} alt='Logo' width={160} />
      </Link>

      <div className='flex items-center space-x-2.5 text-sm'>
        <button
          onClick={toggleSidebar}
          className='md:hidden p-2 rounded-md hover:bg-gray-200'
        >
          {sidebarOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
        </button>

        <div
          className={`${
            sidebarOpen ? 'left-0' : '-left-full'
          } fixed top-0 w-64 h-full bg-white shadow-xl transition-all duration-300 z-40 md:hidden`}
        >
          <div className='flex justify-end p-4'>
            <button onClick={toggleSidebar}>
              <HiX size={30} />
            </button>
          </div>
          <nav className='flex flex-col items-center'>
            <Link
              href={'/'}
              className='py-2 text-lg text-gray-700 hover:text-blue-600'
            >
              Home page
            </Link>
            <Link
              href={'/products'}
              className='py-2 text-lg text-gray-700 hover:text-blue-600'
            >
              All products
            </Link>
            <Link
              href={'/products'}
              className='py-2 text-lg text-gray-700 hover:text-blue-600'
            >
              Contact
            </Link>
            <Link
              href={'/products'}
              className='py-2 text-lg text-gray-700 hover:text-blue-600'
            >
              About
            </Link>
            <Link href={'/shopping-cart'} className='py-2'>
              <button aria-label="Shopping Cart" className="button bg-blue-600 px-7 py-1 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                <ShoppingCartIcon />
              </button>
            </Link>
          </nav>
        </div>

        <nav className='md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center'>
          <Link href={'/'} className='mr-5 text-gray-900 hover:text-blue-600'>
            Home page
          </Link>
          <Link href={'/products'} className='mr-5 text-gray-900 hover:text-blue-600'>
            All products
          </Link>
          <Link href={'/products'} className='mr-5 text-gray-900 hover:text-blue-600'>
            Contact
          </Link>
          <Link href={'/products'} className='mr-5 text-gray-900 hover:text-blue-600'>
            About
          </Link>
        </nav>

        <Link href={'/shopping-cart'} className='hidden md:block'>
          <button aria-label="Shopping Cart" className="button bg-blue-600 px-7 py-1 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            <ShoppingCartIcon />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
