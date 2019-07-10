const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const dev = process.env.NODE_ENV !== "production"
  const app = next({ dev })
  const handle = app.getRequestHandler()

  return app.prepare().then(() => {
    return createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      return handle(req, res, parsedUrl)
    }).listen(3000, (err) => {
      if (err) throw err
      console.log("> Ready on http://localhost:3000")
    })
  })
}
