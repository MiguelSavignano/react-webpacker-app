import 'babel-polyfill'
import 'whatwg-fetch'
import React from "react"
import { render } from "react-dom"
import HomeView from "../views/home/index"

const element = document.getElementById("react-root")
render(<HomeView />, element)
console.log("Hi front stack!!")
