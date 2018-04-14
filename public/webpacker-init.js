class WebpackerInitClass {
  loadJavaScriptTag(src) {
    var script = document.createElement("script")
    script.setAttribute("src", src)
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  loadManifest(manifestPath, callback) {
    fetch(manifestPath, { headers: { "Content-Type": "application/json"} })
    .then(response => {
      response.json().then(manifestJSON => {
        callback(manifestJSON)
      })
    })
  }

  loadPack(packName = "", { manifestPath = "/public/packs/manifest.json" } = {}) {
    this.loadManifest(manifestPath, (manifestJSON) => {
      console.log(manifestJSON)
      let scriptName = manifestJSON[packName]
      this.loadJavaScriptTag(scriptName)
    })
  }
}
window.WebpackerInit = new WebpackerInitClass()