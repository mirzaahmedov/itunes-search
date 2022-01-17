import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import Typography from "@components/Typography"
import Playlist from "@components/Playlist"

const Content = styled.div`
  padding: 0px 10px;
`
const Header = styled.div`
  padding: 0px 10px;
`

export default function Artist() {
  const [data, setData] = React.useState(null)

  const { id } = useParams()

  React.useEffect(
    function () {
      axios
        .get(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))
    },
    [id]
  )

  return (
    <Content>
      <Header>
        <Typography italic as="h1" size={1} top={1} bottom={1} color="text-alt" >
          Songs by {data && data.results[0].artistName}
        </Typography>
      </Header>
      <Playlist data={data} />
    </Content>
  )
}
