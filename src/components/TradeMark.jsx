import React from "react"
import styled from "styled-components"
import * as icons from "../assets/icons"
import { Link } from "react-router-dom"

const Wrap = styled(Link)`
  display: block;
  font-size: ${(props) => props.size || 1}rem;
  color: inherit;
  & > svg {
    display: block;
  }
`

export default function TradeMark(props) {
  return (
    <Wrap to="/" {...props}>
      <icons.Logo />
    </Wrap>
  )
}
