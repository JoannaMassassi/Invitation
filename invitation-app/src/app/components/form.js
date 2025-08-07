import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'

import { Button, Input, RowContainer, StyledLabel } from './form.styles'
import { useRouter } from 'next/router'

const ConfirmationForm = () => {
	const [plusOne, setPlusOne] = useState(false)
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const { push } = useRouter()

	const handleClick = (value) => {
		if (plusOne === value) {
			setPlusOne(false)
		} else {
			setPlusOne(value)
		}
	}
	const handlePasswordCheck = async () => {
		const res = await fetch('/api/check-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password }),
		})

		const data = await res.json()

		if (res.ok && data.valid) {
			return true
		} else {
			alert('No tienes acceso RATAAAA')
			return false
		}
	}

	const handleDataBaseSubmit = async () => {
		setLoading(true)
		const { error } = await supabase
			.from('attendance')
			.insert([{ name, plus_one: plusOne }])

		if (error) {
			alert('No jaló la mamada U_U, escríbeme')
			setLoading(false)
		} else {
			push('details')
			setLoading(false)
		}
	}

	const onSubmit = async (event) => {
		event.preventDefault()
		const hasAccess = await handlePasswordCheck()
		if (hasAccess) {
			handleDataBaseSubmit()
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<StyledLabel>Nombre</StyledLabel>
			<Input
				onChange={(e) => setName(e.target.value)}
				type='text'
				name='name'
				value={name}
				required
			/>
			<StyledLabel>Contraseña</StyledLabel>
			<Input
				onChange={(e) => setPassword(e.target.value)}
				type='password'
				name='password'
				value={password}
				required
			/>
			<RowContainer>
				<StyledLabel>Traerás +1? </StyledLabel>
				<input
					type='radio'
					name='plus'
					onClick={() => handleClick(!plusOne)}
					checked={plusOne}
				/>
			</RowContainer>
			<Button type='submit'>{loading ? 'Cargando...' : 'Confirmar'}</Button>
		</form>
	)
}

export default ConfirmationForm
