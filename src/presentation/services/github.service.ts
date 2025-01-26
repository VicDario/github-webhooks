import { GitHubStarPayload } from '../../interfaces/github-start.interface'

export class GithubService {
  constructor() {}

  public onStar(payload: GitHubStarPayload): string {
    const { action, sender, repository } = payload;

    return `User ${ sender.login } ${ action } star on ${ repository.full_name }`;
  }
}
