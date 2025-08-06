import styled from 'styled-components'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: '400' })

export const StyledLabel = styled.p`
	font-family: ${lato.style.fontFamily};
	font-size: 14px;
	color: #9c27f5;

	@media (max-width: 480px) {
		font-size: 13px;
	}
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

export const Button = styled.button`
	align-self: flex-end;
	background-color: #9c27f5;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	margin-top: 30px;

	@media (max-width: 480px) {
		align-self: stretch;
		text-align: center;
		width: 100%;
	}
`

export const Input = styled.input`
	width: 96%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;

	@media (max-width: 480px) {
		width: 90%;
	}
`
