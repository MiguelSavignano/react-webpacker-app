import WebpackFolderContext from "./webpack-folder-context"

const mergeWithFolderContext = (routesMap, webpackContext) => {
  const contextFolder = new WebpackFolderContext(webpackContext)
  const folderPathsContext = contextFolder.getAllModulesByFile()
  let array = []
  routesMap.forEach(routesMap => {
    folderPathsContext.forEach(({ filePath, Component }) => {
      if (filePath == routesMap.to) {
        array.push({ ...routesMap, Component, componentName: Component.name })
      }
    })
  })
  return array
}

export { mergeWithFolderContext }
