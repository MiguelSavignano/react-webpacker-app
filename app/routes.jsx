import React from "react"
import { Route } from "react-router-dom"
import { mergeWithFolderContext } from "./lib/routes/build-routes"

let routesMap = [
  { path: "/", to: "home/index" },
  { path: "/posts", to: "posts/index" },
  { path: "/posts/:id", to: "posts/show" },
  { path: "/posts/:id/new", to: "posts/new" },
  { path: "/posts/:id/edit", to: "posts/edit" }
]

routesMap = mergeWithFolderContext(routesMap, require.context("./views/", true, /^\.\/.*\.jsx$/))

const AppRoutes = () => (
  <React.Fragment>
    {routesMap.map(({ Component, path }) => {
      return <Route key={path} path={path} component={Component} />
    })}
  </React.Fragment>
)

// <Route exact path="/" component={Home} />
// <Route path="/posts/:id" render={({ match }) => <PostsShow id={match.params.id} />} />
// <Route key={filePath} path={filePath} component={Component} />
export default AppRoutes
