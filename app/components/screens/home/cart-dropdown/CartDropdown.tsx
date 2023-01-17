import Image from 'next/image'
import { FC } from 'react'
import { BsCart, BsTrash, BsX } from 'react-icons/bs'
import { useOutside } from '../../../../hooks/useOutside'
import PlaceOrder from './PlaceOrder'

const cart: any = [
	{
		id: 1,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		rating: { rate: 3.9, count: 120 },
	},
	{
		id: 2,
		title: 'Mens Casual Premium Slim Fit T-Shirts ',
		price: 22.3,
		description:
			'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
		category: "men's clothing",
		image:
			'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
		rating: { rate: 4.1, count: 259 },
	},
]

const CartDropdown: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	return (
		<>
			<button
				className='bg-green-900 rounded-full text-white px-5 py-3 block'
				onClick={() => setIsShow(!isShow)}
			>
				{isShow ? <BsX /> : <BsCart />}
			</button>

			{isShow && (
				<div
					className='bg-white rounded-t-xl shadow-2xl fixed bottom-0 left-0 anim-cart z-10 py-7 px-5 w-full'
					style={{ minHeight: '45%' }}
					ref={ref}
				>
					{cart.length ? (
						<>
							{cart.map((product: any) => (
								<div
									key={`Cart item: ${product.id}`}
									className='flex items-center justify-between bg-grey-100 rounded-lg p-4 mb-4'
								>
									<div className='w-3/4 flex items-center'>
										<div className='mr-4'>
											<Image
												src={product.image}
												alt={product.title}
												width='33'
												height='48'
												className='rounded-lg'
												layout='fixed'
											/>
										</div>
										<div className='text-sm mr-4 w-3/4 '>
											<div className='overflow-hidden text-ellipsis whitespace-nowrap font-bold text-black-900 mb-1'>
												{product.title}
											</div>
											<div className='text-green-800'>${product.price}</div>
										</div>
									</div>
									<button>
										<BsTrash className='text-green-600' />
									</button>
								</div>
							))}
							<PlaceOrder />
						</>
					) : (
						<div>Cart is empty</div>
					)}
				</div>
			)}
		</>
	)
}

export default CartDropdown
