import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='py-7 px-5'>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
