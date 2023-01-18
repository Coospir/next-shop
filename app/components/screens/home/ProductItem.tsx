import Image from 'next/image'
import { FC } from 'react'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../store/product/product.types";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const {addItem} = useActions()
	const {cart} = useTypedSelector(state => state)
	const isExistsInCart = cart.some(p => p.id === product.id)

	return (
		<div
			style={{ width: '48%', backgroundColor: 'rgb(255,255,255)' }}
			className='rounded-md mb-5 p-3 shadow-sm'
		>
			<div className='text-center'>
				<Image
					src={product.image}
					alt={product.title}
					width='150'
					height='200'
					className='rounded-xl'
				/>
			</div>
			<div className='flex items-start justify-between mt-3 py-2'>
				<div className='text-black-900 font-medium text-md overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
					{product.title}
				</div>
				<div className='text-md text-green-600'>${product.price}</div>
			</div>
			{isExistsInCart ?
				<button className='whitespace-nowrap items-center rounded-md border border-transparent bg-green-500 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-green-700' onClick={() => !isExistsInCart && addItem(product)}>
					Already in cart
				</button>
				:
				<button className='whitespace-nowrap items-center rounded-md border border-transparent bg-green-900 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-green-700' onClick={() => !isExistsInCart && addItem(product)}>
					Add to cart
				</button>
			}
		</div>
	)
}

export default ProductItem
