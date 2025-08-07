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
					12:30 am en mi casa. La temática es gothic-emo (っ҂ཀ•)っ, asifonyu
					ponte tus mejores ropas, no seas aburrideeee jochis. Habrá pizza,
					jueguitos y pastel, puedes traer 1 acompañante. Para confirmar tu
					asistencia llena el siguiente formulario a más tardar el 10 de Agosto,
					Graciasss!
				</DescriptionText>
				<ConfirmationForm />
			</ContentContainer>
		</HomeWrapper>
	)
}

export default Home
