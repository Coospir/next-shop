import { NextPage } from 'next'
import Link from 'next/link'

const Checkout: NextPage = () => {
	return (
		<>
			<h1 className='text-2xl'>Thank you for your order!</h1>
			<Link href='/'>
				<a className='text-green-700'>Go back</a>
			</Link>
		</>
	)
}

export default Checkout
