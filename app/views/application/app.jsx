import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "../home/index"
import PostsIndex from "../posts/index"
import PostsShow from "../posts/show"

const AppRoutes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={PostsIndex} />
    <Route path="/posts/:id" render={({ match }) => <PostsShow id={match.params.id} />} />
  </React.Fragment>
)

const App = props => (
  <BrowserRouter>
    <div>
      <div>Hola React</div>
      <AppRoutes />
    </div>
  </BrowserRouter>
)
export default App
