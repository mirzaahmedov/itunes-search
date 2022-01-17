import React from "react"
import styled from "styled-components"
import Menu from "@components/Menu"
import TradeMark from "@components/TradeMark"

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80px;
  padding: 0px 20px;
`

export default function Header(){
  return (
    <Container>
      <Menu />
      <TradeMark size={2} />
    </Container>
  )
}