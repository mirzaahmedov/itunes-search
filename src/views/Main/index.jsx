import React from "react"
import axios from "axios"
import styled from "styled-components"
import { useSearchParams } from "react-router-dom"
import Searchfield from "@components/Searchfield"
import Playlist from "@components/Playlist"

const Content = styled.main`
  padding: 0px 10px;
  @media (max-width: 500px) {
    padding: 0px;
  }
`

export default function index() {
  const [searchParams,setSearchParams] = useSearchParams()
  const term = searchParams.get("term") || ""
  const [value,setValue] = React.useState(term)
  const [data, setData] = React.useState(null)
  

  React.useEffect(
    function () {
      const timer = setTimeout(function () {
        setSearchParams({ term: value })
      }, 1000)
      return () => clearTimeout(timer)
    },
    [value]
  )
  React.useEffect(function(){
    axios
          .get(`https://itunes.apple.com/search?term=${term}&limit=50&entity=song`)
          .then((response) => setData(response.data))
          .catch((error) => console.dir(error))
  },[term])

  return (
    <Content>
      <Searchfield value={value} setTerm={setValue} />
      <Playlist data={data} />
    </Content>
  )
}
