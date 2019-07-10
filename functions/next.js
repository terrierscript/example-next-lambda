const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")
const createApp = require("../server")
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = (event, context) => {
  const port = 4000

  const app = createApp()
  app.prepare().then(() => {
    new http.Server((req, res) => {
      // Add assetPrefix support based on the hostname
      if (req.headers.host === "my-app.com") {
        app.setAssetPrefix("http://cdn.com/myapp")
      } else {
        app.setAssetPrefix("")
      }

      handleNextRequests(req, res)
    })
  })
}
