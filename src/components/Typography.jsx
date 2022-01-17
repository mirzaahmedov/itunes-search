import styled from "styled-components";

export default styled.p`
  margin-top: ${props => props.top}rem;
  margin-bottom: ${props => props.bottom}rem;
  font-size: ${props => props.size || 1}rem;
  font-weight: ${props => props.bold ? "bold" : props.weight};
  font-style: ${props => props.italic && "italic"};
  font-family: var(--font-${props => props.family || "main"});
  line-height: ${props => props.lineHeight}rem;
  color: rgb(var(--${props => props.color || "text"}));
`