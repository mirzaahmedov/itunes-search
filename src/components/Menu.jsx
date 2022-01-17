import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import * as icons from "@assets/icons"
import TradeMark from "@components/TradeMark"
import IconButton from "@components/IconButton"

const Container = styled.div`
  position: relative;
`
const Sidebar = styled(motion.div)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  color: rgb(var(--text-alt));
  background-color: rgb(var(--background-alt));
  box-shadow: 10px 0px 10px rgba(0,0,0,0.2);
  z-index: 100;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80px;
  padding: 20px;
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 10px;
  font-size: 1rem;
`
const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  text-decoration: none;
  color: currentColor;
  &.active {
    color: rgb(var(--primary));
    background-color: #333333;
  }

  & > svg {
    display: inline-block;
  }
`

const animation = {
  initial: { x: "-100%" },
  animate: { x: "0%" },
  exit: { x: "-100%" },
  transition: { type: "tween" },
}

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Container>
      <IconButton size={1.5} onClick={() => setIsOpen(true)}>
        <icons.Menu />
      </IconButton>
      <AnimatePresence>
        {isOpen && (
          <Sidebar
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={animation.transition}
          >
            <Header>
              <IconButton size={1.5} onClick={() => setIsOpen(false)}>
                <icons.Menu />
              </IconButton>
              <TradeMark size={2} />
            </Header>
            <Nav>
              <Link to="/">
                <icons.Home /> Home
              </Link>
              <Link to="/history">
                <icons.History /> History
              </Link>
              <Link to="/Saved">
                <icons.Bookmark /> Favourites
              </Link>
              <Link to="/settings">
                <icons.Gear /> Settings
              </Link>
              <Link to="/about">
                <icons.QuestionMark /> About
              </Link>
            </Nav>
          </Sidebar>
        )}
      </AnimatePresence>
    </Container>
  )
}
