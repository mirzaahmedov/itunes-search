import React from "react"
import Track from "@components/Track"
import Player from "@components/Player"

export default function Playlist(props){
  const [activeTrack, setActiveTrack] = React.useState(null)

  return (
    <div>
      <Player track={activeTrack} setTrack={setActiveTrack} />
      {props.data &&
        props.data.results.map((result) => result.kind === "song" && (
          <Track key={result.trackId} data={result} select={setActiveTrack} />
        ))}
    </div>
  )
}