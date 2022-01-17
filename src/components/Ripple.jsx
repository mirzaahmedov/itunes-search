import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: rgba(var(--${(props) => props.color}),0.5);
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`

function useDebouncedRippleCleanUp(rippleCount, duration, cleanUpFunction){
  React.useLayoutEffect(() => {
    let bounce = null
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}

export default function Ripple(props) {
  const [ripples, setRipples] = React.useState([])

  useDebouncedRippleCleanUp(ripples.length, props.duration, function(){
    setRipples([])
  })

  const addRipple = function (event) {
    const container = event.currentTarget.getBoundingClientRect()
    const size =
      container.width > container.height ? container.width : container.height

    const x = event.clientX - container.x - container.width / 2
    const y = event.clientY - container.y - container.width / 2
    const ripple = {
      x,
      y,
      size,
    }

    setRipples((state) => [...state, ripple])
  }

  return (
    <Container duration={props.duration} color={props.color} onMouseDown={addRipple}>
      {ripples.map((ripple, index) => {
        return (
          <span
            key={"ripple_" + index}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        )
      })}
    </Container>
  )
}
