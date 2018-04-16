export default class WebpackFolderContext {

  constructor(requireContext){
    this.requireContext = requireContext
  }

  // return a [{ filePath: "file_folder/fileName", value: ExportedDefaultObject }]
  getAllModulesByFile = ({prefix = ""} = {}) => {
    const filesPaths = this.requireContext.keys()
    return filesPaths.map(filePath => {
      const id = this.requireContext.resolve(filePath)
      let fileName = this.deleteFileExtension(filePath.replace("./", ""))
      return {
        filePath: `${prefix}${fileName}`,
        Component: this.getModule(id).default,
        module: this.getModule(id),
      }
    })
  }

  getModule(id = "webpackid"){
    return __webpack_require__(id) // eslint-disable-line
  }

  deleteFileExtension = (fileName = "") => fileName.substr(0, fileName.lastIndexOf('.')) || fileName

}
