import React from "react"
import styled from "styled-components"

const Crop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
`
const Background = styled.div`
  position: absolute;
  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
  background-size: cover;
  background-position: center;
  filter: blur(5px) brightness(0.7);
`

export default function Backdrop(props) {
  return (
    <Crop>
      <Background style={{ backgroundImage: `url(${props.image})` }} />
    </Crop>
  )
}
