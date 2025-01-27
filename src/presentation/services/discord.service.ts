import { envs } from '../../config/envs'

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
    }

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) throw new Error('Failed to send message to Discord')
  }
}
