import { useEffect, useRef } from 'react'
import {
	ContentContainer,
	DescriptionText,
	HomeWrapper,
	StyledCat,
} from './home.styles'
import ConfirmationForm from './components/form'

const Home = () => {
	const audioRef = useRef(null)

	useEffect(() => {
		if (audioRef.current === null) {
			audioRef.current.play()
		}
	}, [audioRef])

	return (
		<HomeWrapper>
			<StyledCat src='/img/cat.gif' alt='cat' />
			<audio
				controls
				ref={audioRef}
				src='/audio/uia.mp3'
				onEnded={() => (audioRef.current = null)}
			/>
			<ContentContainer>
				<DescriptionText>
					Si recibiste esta invitación es porque me gustaría que me acompañaras
					en mi cumpleaños número 30. Será el sábado 16 de agosto de 18:00 hrs a
					12:30 am en mi casa. La temática es gothic-emo party (っ҂ཀ•)っ, así
					que ponte tus mejores ropas, no seas wack ass jochis. Puedes traer +1.
					Para confirmar tu asistencia llena el siguiente formulario:
				</DescriptionText>
				<ConfirmationForm />
			</ContentContainer>
		</HomeWrapper>
	)
}

export default Home
