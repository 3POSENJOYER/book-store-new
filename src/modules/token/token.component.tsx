import React from 'react'
import {
	Header,
} from './components/header.component'
import {
	Products,
} from './components/products/products'
import {
	Main,
} from './components/main'

import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Products/>
			<div className={styles.body}>
			Products</div>
			<Main/>
		</div>
	)
}

export default App