import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../home/index"
import PostsIndex from "../posts/index"

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={PostsIndex} />
    </Switch>
  </main>
)
export default Routes
