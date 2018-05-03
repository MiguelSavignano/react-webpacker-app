# React webpacker app

Simple webpack dev server for create react app with routes

## Webpacker

webpacker it's a npm lib for abstract complex configuration of webpack like

* webpack 4.x.x
* ES6 with babel
* Automatic code splitting using multiple entry points
* Stylesheets - Sass and CSS
* Images and fonts
* PostCSS - Auto-Prefixer
* Asset compression, source-maps, and minification
* CDN support
* React, Angular, Elm and Vue support out-of-the-box
* Extensible and configurable

[more info](https://github.com/rails/webpacker)

## Define routes
For define a new view you need to create the file in app/views folder, for define custom url add the url path and the path to the jsx file will be loaded.

```javascript
const routesMap = drawRoutes([
  { path: "/", to: "home/index" },
  { path: "/posts/:id", to: "posts/show" },
], require.context("./views/", true, /^\.\/.*\.jsx$/))
```
routesMap is a array of url path and the component element.
```javascript
routesMap.map(({ Component, path, to }) => (
  <Route exact path={path} render={({ match }) => <Component params={match.params} />} />
)
```