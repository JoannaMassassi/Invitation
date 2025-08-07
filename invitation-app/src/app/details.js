import {
	DetailsWrapper,
	ContentContainer,
	DescriptionText,
	TitlesText,
	ConfirmText,
	RowContainer,
	DownloadImg,
} from './details.styles'

const DetailsPage = () => {
	return (
		<DetailsWrapper>
			<ContentContainer>
				<ConfirmText>
					Gracias por confirmar tu asistencia pelonshite :D !!!!
				</ConfirmText>
				<RowContainer>
					<DescriptionText>
						Aqui te dejo un archivo con la dirección y los detalles para
						descargar :)
					</DescriptionText>
					<a href='/files/Nota.docx' download>
						<DownloadImg src='/img/download.png' alt='Download' />
					</a>
				</RowContainer>
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
