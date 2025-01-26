import { Request, Response } from 'express'
import { GithubService } from '../services/github.service'

export class GithubController {
  constructor(
    private readonly githubService: GithubService = new GithubService()
  ) {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.headers['x-github-event'] ?? 'unknown'
    const payload = req.body
    let message: string
    switch (githubEvent) {
      case 'star':
        message = this.githubService.onStar(payload)
        break
      case 'issues':
        message = this.githubService.onIssue(payload)
        break
      default:
        message = `Unhandled event: ${githubEvent}`
        break
    }
    res.status(201).json('Webhook received')
  }
}
