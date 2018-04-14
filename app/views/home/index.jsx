import React from "react"
import { Link } from "react-router-dom"

const HomeView = () => (
  <ul>
    <li>
      <Link to="/posts">Index</Link>
    </li>
    <li>
      <Link to="/posts/1">Show</Link>
    </li>
    <li>
      <Link to="/posts/1/edit">Edit</Link>
    </li>
  </ul>
)
export default HomeView
