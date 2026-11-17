import {
	DetailsWrapper,
	ContentContainer,
	DescriptionText,
	TitlesText,
	ConfirmText,
} from './details.styles'

const DetailsPage = () => {
	return (
		<DetailsWrapper>
			<ContentContainer>
				<ConfirmText>
					Gracias por confirmar tu asistencia pelonshite :D !!!!
				</ConfirmText>
				<TitlesText>NOTAS</TitlesText>
				<DescriptionText>
					* BYOB, habrá shots y algo de cerveza para los juegos pero trae tu
					pisto para la noche.
				</DescriptionText>
				<DescriptionText>
					* No niñes, habrá alcohol y gente borracha (Yo)
				</DescriptionText>
				<TitlesText>Graciasssss nos vemos prontoooo!</TitlesText>
			</ContentContainer>
		</DetailsWrapper>
	)
}

export default DetailsPage
