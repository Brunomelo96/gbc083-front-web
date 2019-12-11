import styled from 'styled-components'

const CenterLoading = styled.div`
  position: absolute;
  background-color: white;
  opacity: 0.7;
  top: 200;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  z-index: 4000;
  display:flex;
  justify-content: center;
  align-items: center;
`

export default CenterLoading
