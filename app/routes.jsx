import React from "react"
import { Route } from "react-router-dom"
import Home from "./views/home/index"
import PostsIndex from "./views/posts/index"
import PostsShow from "./views/posts/show"
import WebpackRegister from "./lib/webpack-register"

const buildRoutes = RoutesWrapper => {
  const contextFolder = new WebpackRegister(require.context("./views/", true, /^\.\/.*\.jsx$/))
  const modulesPaths = contextFolder.getAllModulesByFile()
  console.log(modulesPaths)
  return class extends React.Component {
    render() {
      return <RoutesWrapper modulesPaths={modulesPaths} />
    }
  }
}

const AppRoutes = ({ modulesPaths }) => (
  <React.Fragment>
    <div>
      {modulesPaths.map(({ filePath, Component }) => (
        <Route key={filePath} path={`/${filePath}`} component={Component} />
      ))}
    </div>
  </React.Fragment>
)

// <Route exact path="/" component={Home} />
// <Route path="/posts/:id" render={({ match }) => <PostsShow id={match.params.id} />} />
// <Route key={filePath} path={filePath} component={Component} />
export default buildRoutes(AppRoutes)
