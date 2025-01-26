import { GitHubIssuePayload } from '../../interfaces/github-issue.interface'
import { GitHubStarPayload } from '../../interfaces/github-start.interface'

export class GithubService {
  constructor() {}

  public onStar(payload: GitHubStarPayload): string {
    const { action, sender, repository } = payload

    return `User ${sender.login} ${action} star on ${repository.full_name}`
  }

  public onIssue(payload: GitHubIssuePayload): string {
    const { action, issue } = payload
    let message: string = ''
    if (action === 'opened')
      message = `New issue was opened with title: ${issue.title}`
    if (action === 'closed')
      message = `Issue was closed with title: ${issue.title}`
    if (action === 'reopened')
      message = `Issue was reopened by: ${issue.user.login}`
    return message || `Unhandled action for the issue: ${action}`
  }
}
