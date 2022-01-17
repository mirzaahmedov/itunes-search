import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import * as icons from "@assets/icons"
import Backdrop from "@components/Backdrop"
import Typography from "@components/Typography"
import PlayerControls from "@components/PlayerControls"
import IconButton from "@components/IconButton"
import Button from "@components/Button"

const Overlay = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`
const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  overflow-y: auto;
`
const Header = styled.div`
  width: 100%;
  padding: 20px;
  text-align: left;
`
const Footer = styled.div`
  padding: 20px;
`
const Body = styled.div`
  position: relative;
  width: 90%;
  margin: 0% 5%;
  padding-bottom: 40px;
`
const Artwork = styled.img`
  width: 100%;
  margin-bottom: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`

const animation = {
  initial: { x: "100%" },
  animate: { x: "0%" },
  exit: { x: "100%" },
  transition: { type: "tween" },
}

export default function index(props) {
  const audio = React.useRef(new Audio())
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(
    function () {
      if (props.track) {
        audio.current.src = props.track.previewUrl
        audio.current.play()
        setIsPlaying(true)
        document.body.classList.add("noscroll")
      } else {
        audio.current.pause()
        document.body.classList.remove("noscroll")
      }
      return () => audio.current.pause()
    },
    [props.track]
  )
  React.useEffect(
    function () {
      if (isPlaying) audio.current.play()
      else audio.current.pause()
    },
    [isPlaying]
  )

  return (
    <AnimatePresence>
      {props.track && (
        <Overlay
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
        >
          <Content>
            <Backdrop image={props.track.artworkUrl100} />
            <Header>
              <IconButton size={2} onClick={() => props.setTrack(null)}>
                <icons.Playlist />
              </IconButton>
            </Header>
            <Body>
              <Artwork
                src={props.track.artworkUrl100.replace("100x100", "500x500")}
                alt={props.track.trackName}
              />
              <Typography as="h3" lineHeight={1.6}>
                {props.track.trackName}
              </Typography>
              <Typography size={0.8} lineHeight={1.6} color="text-alt">
                {props.track.artistName}
              </Typography>
              <PlayerControls
                isPlaying={isPlaying}
                pause={() => setIsPlaying(false)}
                play={() => setIsPlaying(true)}
                forward={() => (audio.current.currentTime += 5)}
                backward={() => (audio.current.currentTime -= 5)}
              />
              <Footer>
                <Button to={`/artist/${props.track.artistId}`}>
                  More from Artist
                </Button>
              </Footer>
            </Body>
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
