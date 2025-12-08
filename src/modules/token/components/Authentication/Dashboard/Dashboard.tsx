import React, { useState, useEffect } from 'react'

interface IUser {
	name: string
}

const Dashboard: React.FC = () => {
	const [user, setUser] = useState<IUser | null>(null)

	const token = localStorage.getItem('token')

	const apiUrl = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

	useEffect(() => {
		const fetchUser = async (): Promise<void> => {
			try {
				const res = await fetch(`${apiUrl}/api/user/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})

				if (res.ok) {
					const data = await res.json()
					setUser(data)
				}
			} catch (e) {
				console.error(e)
			}
		}
		if (token) {
			fetchUser()
		}
	}, [token, apiUrl])

	return <div className='dashboard'>{user?.name ? <div className='user'>{user.name}</div> : <p>not found</p>}</div>
}

export default Dashboard
