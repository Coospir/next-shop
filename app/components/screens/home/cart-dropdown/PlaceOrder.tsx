import Link from 'next/link'
import { FC } from 'react'

const PlaceOrder: FC = () => {
	return (
		<Link href='checkout'>
			<a className='bg-green-800 shadow-md shadow-green-100 rounded-xl block text-center p-3 text-white w-3/5 mx-auto mt-5 hover:bg-green-700 duration-300 transition-colors ease-in'>
				Make an order
			</a>
		</Link>
	)
}

export default PlaceOrder
