import express from 'express'
import { envs } from './config/envs'
import { GithubController } from './presentation/github/controller'
;import { GithubSha256Middleware } from './presentation/middleware/github-sha256.middleware';
(() => {
  main()
})()

function main() {
  const app = express()
  app.use(express.json())

  const controller = new GithubController()
  app.use(GithubSha256Middleware.verifyGithubSignature)
  app.post('/api/github', controller.webhookHandler)

  app.listen(envs.PORT, () =>
    console.log(`Server is running on port ${envs.PORT}`)
  )
}
