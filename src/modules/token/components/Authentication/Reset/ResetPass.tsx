import React, {
	useState,
} from 'react'
import {
	Link,
} from 'react-router-dom'
import './ResetPass.css'

const ResetPass: React.FC = () => {
	const [email, setEmail,] = useState('',)
	const [response, setResponse,] = useState('',)

	const HandleSubmit = async(e: React.FormEvent,): Promise<void> => {
		e.preventDefault()

		try {
			const res = await fetch('/http://localhost:3000/api/reset', {
				method:  'POST',
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify({
					email,
				},),
			},)

			const data = await res.json()

			setResponse(data.message || 'Email sent!',)
		} catch (err) {
			console.error(err,)
			setResponse('Error sending email',)
		}
	}

	return (
		<div className='resetPasswordSection'>
			<h2>Reset Your Password</h2>

			<div className='resetPasswordContainer'>
				<p>We will send you an email to reset your password</p>

				<form onSubmit={HandleSubmit}>
					<input
						type='email'
						required
						placeholder='Email address *'
						onChange={(e: React.ChangeEvent<HTMLInputElement>,): void => {
							setEmail(e.target.value,)
						}}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>

			{response && <div className='response'>{response}</div>}

			<p>
				Back to{' '}
				<Link to='/loginSignUp'>
					<span>Login</span>
				</Link>
			</p>
		</div>
	)
}

export default ResetPass
