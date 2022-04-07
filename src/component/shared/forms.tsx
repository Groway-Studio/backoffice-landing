import styled from "styled-components";

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const FormGroup = styled.div`
	width: 100%;
	margin: 8px auto 8px;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #031D44;
`;


export const Input = styled.input`
	padding: 0.5em;
    height: 36px;
	background: #E5E5E5;
	border: none;
	border-radius: 10px;
	margin-bottom: 0.5em;
`;
export const TextArea = styled.textarea`
	padding: 0.5em;
    height: 108px;
	background: #E5E5E5;
	border: none;
	border-radius: 10px;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
`;