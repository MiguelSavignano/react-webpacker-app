import React from "react"
import { Route } from "react-router-dom"
import { drawRoutes } from "./lib/routes/routes-draw"

const routesMap = drawRoutes(
  [
    { path: "/", to: "home/index" },
    { path: "/posts", to: "posts/index" },
    { path: "/posts/:id", to: "posts/show" },
    { path: "/posts/:id/new", to: "posts/new" },
    { path: "/posts/:id/edit", to: "posts/edit" }
  ],
  require.context("./views/", true, /^\.\/.*\.jsx$/)
)

const AppRoutes = () => (
  <React.Fragment>
    {routesMap.map(({ Component, path, to }) => {
      return <Route exact key={to} path={path} render={({ match }) => <Component params={match.params} />} />
    })}
  </React.Fragment>
)

export default AppRoutes
