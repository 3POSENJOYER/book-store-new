import {
	error,
} from 'console'
import React , {
	useState,useEffect,
} from 'react'

const Dashboard:React.FC = () => {
	const [user ,setUser,] = useState(null,)
	const token = localStorage.getItem('token',)
	useEffect(() => {
		const fetchUser = async():Promise<void> => {
			const res = await fetch('http://localhost:5000/api/user/me',{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},)
			const data = await res.json()
			setUser(data,)
		}
		fetchUser()
	},[token,],)

	return (
		<div className='dashboard'>
			{user.name ?
				<div className='user'>
					{user.name}
				</div> :
				<p>not found</p>}

		</div>
	)
}

export default Dashboard