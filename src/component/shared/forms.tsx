import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
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
  margin-left: 0.3rem;
  min-width: 145px;
`;

export const Input = styled.input`
  background: #e5e5e5;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  padding: 0.64rem 0.6rem;
`;

export const Select = styled.select`
  background: #e5e5e5;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  padding: 0.6rem;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #e5e5e5;
  border-radius: 4px;
  border: none;
  height: 1rem;
  width: 1rem;
`;

export const Option = styled.option``;
