import React from "react"
import styled from "styled-components"
import Typography from "@components/Typography"
import Ripple from "@components/Ripple"

const Container = styled.figure`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 400px;
  padding: 10px 10px;
  border-radius: 5px;
  @media (max-width: 500px) {
    border-radius: 0px;
  }
  cursor: pointer;
  overflow: hidden;
`
const Artwork = styled.img`
  width: 60px;
  height: 60px;
`

export default function Track(props) {
  return (
    <Container onClick={() => props.select(props.data)}>
      <Ripple color="text-alt" duration={500} />
      <Artwork src={props.data.artworkUrl100} alt={props.data.trackName} />
      <figcaption>
        <Typography as="h3">{props.data.trackName}</Typography>
        <Typography as="span" color="text-alt" size={0.8}>
          {props.data.kind} <i>by</i> {props.data.artistName}
        </Typography>
      </figcaption>
    </Container>
  )
}
