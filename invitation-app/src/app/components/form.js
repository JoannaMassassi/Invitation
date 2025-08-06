import { useState } from 'react'
import { Button, Input, RowContainer, StyledLabel } from './form.styles'

const ConfirmationForm = () => {
	const [selected, setSelected] = useState(false)

	const handleClick = (value) => {
		console.log(value)
		if (selected === value) {
			setSelected(false)
		} else {
			setSelected(value)
		}
	}
	async function onSubmit(event) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const response = await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		})

		const data = await response.json()
		// ...
	}

	return (
		<form onSubmit={onSubmit}>
			<StyledLabel>Nombre</StyledLabel>
			<Input type='text' name='name' />
			<StyledLabel>Contraseña</StyledLabel>
			<Input type='password' name='password' />
			<RowContainer>
				<StyledLabel>Traerás +1? </StyledLabel>
				<input
					type='radio'
					name='plus'
					onClick={() => handleClick(!selected)}
					checked={selected}
				/>
			</RowContainer>
			<Button type='submit'>Confirmar</Button>
		</form>
	)
}

export default ConfirmationForm
