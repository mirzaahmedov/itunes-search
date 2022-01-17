import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Header from "@components/Header"
import Main from "@views/Main"
import Artist from "@views/Artist"

const Stylesheet = createGlobalStyle`
    :root {
        --background: 0, 0, 0;
        --background-alt: 33, 33, 33;
        --background-highlight: 34, 34, 34;
        --text: 255, 255, 255;
        --text-alt: 189, 189, 189;
        --primary: 79, 195, 247;
        --primary-highlight: 1, 87, 155;
    }
    *::before, *::after, * {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        scroll-behavior: smooth;
    }
    a {
      text-decoration: none;
    }
    body {
        font-size: 16px;
        font-family: "Be Vietnam Pro","Roboto",sans-serif;
        color: rgb(var(--text));
        background-color: rgb(var(--background));
    }
    body.noscroll {
      overflow: hidden;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Stylesheet />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
