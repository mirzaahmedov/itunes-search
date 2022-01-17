import styled from "styled-components";

export default styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  padding: ${props => props.padding}px;
  font-size: ${props => props.size || 1}rem;
  color: currentColor;
  cursor: pointer;
  
  & > svg {
    display: block;
    pointer-events: none;
  }
`