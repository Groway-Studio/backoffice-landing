import styled from "styled-components";

export const Form = styled.form`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: flex-end;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`;

export const Label = styled.label`
  color: #031d44;
`;

export const Input = styled.input`
  background: #e5e5e5;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  height: 36px;
  padding: 0.3rem 0.5rem;
`;

export const TextArea = styled.textarea`
  background: #e5e5e5;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  height: 108px;
  padding: 1rem;
  resize: none;
`;

export const Message = styled.label`
  margin-bottom: 0.5rem;
  color: palevioletred;
`;
