import React from "react"
import styled from "styled-components"
import * as icons from "@assets/icons"

const SearchBar = styled.div`
  position: relative;
  padding: 0px 10px;
`
const SearchField = styled.input`
  appearance: none;
  border: none;
  outline: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 0em 1em 0em 3em;
  font-size: 1rem;
  font-family: "Be Vietnam Pro";
  line-height: 3em;
  color: inherit;
  background-color: #212121;
  border-radius: 5px;
  &:placeholder {
    color: #bdbdbd;
  }
`
const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
  top: 0;
  width: 3em;
  height: 3em;
  font-size: 1rem;
  color: var(--text-alt);
  pointer-events: none;
`

export default function Searchfield(props) {
  console.log(props.term)
  return (
    <SearchBar>
      <Icon>
        <icons.Magnifier />
      </Icon>
      <SearchField
        placeholder="Type something..."
        type="text"
        value={props.value}
        onChange={(event) => props.setTerm(event.target.value)}
      />
    </SearchBar>
  )
}
