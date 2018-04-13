(function(){
  var loadJavaScriptTag = function(src){
    var script = document.createElement("script")
    script.setAttribute("src", src)
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  var getScriptsFromManifest = function(manifestPath, callback) {
    fetch(manifestPath, { headers: { "Content-Type": "application/json"} })
    .then(response => {
      response.json().then(manifestJSON => {
        const packsNames = Object.keys(manifestJSON).filter((item) => (/.js$/.test(item) ))
        const scriptsNames = packsNames.map(key => manifestJSON[key])
        callback(scriptsNames)
      })
    })
  }

  // init

  getScriptsFromManifest("/public/packs/manifest.json", function(scriptsNames){
    scriptsNames.map( scriptName => loadJavaScriptTag(scriptName))
  })

})()