import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    margin 10px 0px;
  }
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input`
  outline: none;
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: gray;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 20px; 
  width: 100%
`

export const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? 'purple' : 'gray')};
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  user-select: none;

  :hover {
    cursor: pointer;
  }

  :active {
    background: black;
  }
`
