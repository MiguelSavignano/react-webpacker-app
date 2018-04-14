import React from "react"
import { Route } from "react-router-dom"
import Home from "./views/home/index"
import PostsIndex from "./views/posts/index"
import PostsShow from "./views/posts/show"

const AppRoutes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={PostsIndex} />
    <Route path="/posts/:id" render={({ match }) => <PostsShow id={match.params.id} />} />
  </React.Fragment>
)

export default AppRoutes
