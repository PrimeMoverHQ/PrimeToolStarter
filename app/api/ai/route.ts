import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { anthropic } from '@ai-sdk/anthropic'

export async function POST(req: Request) {
  const { messages, provider = 'openai', model } = await req.json()

  const selectedModel =
    provider === 'anthropic'
      ? anthropic(model || 'claude-sonnet-4-5-20250929')
      : openai(model || 'gpt-4o')

  const result = streamText({
    model: selectedModel,
    messages,
  })

  return result.toDataStreamResponse()
}
