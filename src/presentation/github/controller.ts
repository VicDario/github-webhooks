import { Request, Response } from 'express'

export class GithubController {
  constructor() {}

  webhookHandler(req: Request, res: Response) {
    const githubEvent = req.headers['x-github-event'] ?? 'unknown'
    const payload = req.body
    res.status(201).json('Webhook received')
  }
}
