import React from 'react'
import {
	Header,
} from './components/header.component'
import {
	Main,
} from './components/main'

import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<div className={styles.body}>
			</div>
			<Main/>
		</div>
	)
}

export default App