import styled from "styled-components"
import { Link } from "react-router-dom"

export default styled(Link)`
  appearance: none;
  outline: none;
  background: none;
  padding: 10px 20px;
  color: currentColor;
  border: 1px solid rgb(var(--text));
  border-radius: 100px;
  transition: 0.25s;
  &:hover {
    background-color: rgba(var(--text-alt),0.2);
  }
`