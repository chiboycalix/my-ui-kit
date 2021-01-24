import styled from 'styled-components';


const primaryBlue = '#2B84ED'
const Button = styled.button`
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  min-width: 100px;
  font-family: 'Roboto', sans-serif;
`
export const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  color: #ffffff;
  border: none;
`