import React from "react"
import styled from "styled-components"
import * as icons from "@assets/icons"
import IconButton from "@components/IconButton"

const Controls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 3em 0em;
  gap: 4rem;
`
const Control = styled(IconButton)`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  font-size: 2rem;
  color: inherit;
  cursor: pointer;
  transition: transform 0.1s;
  &:active {
    transform: scale(1.5);
  }
`

export default function PlayerControls(props){
  return (
    <Controls>
      <Control onClick={props.forward}>
        <icons.Backwards />
      </Control>
      {props.isPlaying ? (
        <Control onClick={props.pause}>
          <icons.Pause />
        </Control>
      ) : (
        <Control onClick={props.play}>
          <icons.Play />
        </Control>
      )}
      <Control onClick={props.backward}>
        <icons.Forwards />
      </Control>
    </Controls>
  )
}