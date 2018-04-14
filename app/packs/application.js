import 'babel-polyfill'
import 'whatwg-fetch'
import React from "react"
import { render } from "react-dom"
import App from "../app"

const element = document.getElementById("react-root")
render(<App />, element)
console.log("Hi front stack!!")
