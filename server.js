const next = require("next")
const http = require("http")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handleNextRequests = app.getRequestHandler()

module.exports = () => {
  return app
}
