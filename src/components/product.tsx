'use client';

import { ProductType } from '@/interfaces';
import Link from 'next/link';
import { FC } from 'react';
import CustomImage from './image';
import { toast } from 'react-toastify';

const Product: FC<{ product: ProductType }> = ({ product }) => {

	const handleClick = () => {
		const products: ProductType[] =
		  JSON.parse(localStorage.getItem("carts") as string) || [];
	
		const isExistProduct = products.find((c) => c.id === product?.id);
	
		if (isExistProduct) {
		  const updatedData = products.map((c) => {
			if (c.id === product?.id) {
			  return {
				...c,
				quantity: c.quantity + 1,
			  };
			}
			return c;
		  });
		  localStorage.setItem("carts", JSON.stringify(updatedData));
		} else {
		  const data = [...products, { ...product, quantity: 1 }];
		  localStorage.setItem("carts", JSON.stringify(data));
		}
		toast("Product added to your bag!!");
	  };

	return (
		<div className='h-96 flex flex-col bg-white shadow-2xl p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border'>
			<Link href={`/product/${product.id}`} className='relative max-h-80 flex-1'>
				<CustomImage product={product} fill />
			</Link>
			
			<h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
				{product.category}
			</h3>
			<div className='font-semibold flex items-center justify-between mt-4 mb-1'>
				<p className='w-44 truncate'>{product.title}</p>
				<p>${product.price}</p>
			</div>
			<p className='leading-relaxed text-base line-clamp-2 mb-4'>
				{product.description}
			</p>
			<button 
				onClick={handleClick} 
				className='button bg-blue-600 px-7 py-2 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'
			>
				Add to Bag
			</button>
		</div>
	);
};

export default Product;
