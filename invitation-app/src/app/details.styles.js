import styled from 'styled-components'
import { Open_Sans, Sansation } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const sansation = Sansation({ subsets: ['latin'], weight: '400' })

export const DetailsWrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 1rem;
	box-sizing: border-box;
	overflow: hidden;

	background-image: url('/img/collage.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	@media (max-width: 768px) {
		background-position: top center;
		padding: 1.5rem 1rem;
	}

	@media (max-width: 480px) {
		background-position: top;
		padding: 1rem;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.3); /* oscurece la imagen */
		z-index: 0;
	}

	> * {
		position: relative;
		z-index: 1;
	}
`

export const ContentContainer = styled.div`
	width: 750px;
	background-color: white;
	border-radius: 10px;
	padding: 15px;

	@media (max-width: 768px) {
		width: 90%;
		padding: 10px;
	}

	@media (max-width: 480px) {
		width: 95%;
		padding: 8px;
	}
`

export const DescriptionText = styled.p`
	font-family: ${openSans.style.fontFamily};
	font-size: 20px;
	text-align: left;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
	}
`

export const TitlesText = styled.p`
	font-family: ${openSans.style.fontFamily};
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	color: #9c27f5;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
	}
`

export const ConfirmText = styled.p`
	font-family: ${sansation.style.fontFamily};
	font-weight: bold;
	font-size: 20px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
	}
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	gap: 10px;
`

export const HomeImg = styled.img`
	height: 200px;
	width: 200px;

	@media (max-width: 768px) {
		height: 150px;
		width: 150px;
	}

	@media (max-width: 480px) {
		height: 120px;
		width: 120px;
	}
`
export const DownloadImg = styled.img`
	height: 50px;
	width: 50px;

	@media (max-width: 768px) {
		height: 20px;
		width: 20px;
	}

	@media (max-width: 480px) {
		height: 20px;
		width: 20px;
	}
`
