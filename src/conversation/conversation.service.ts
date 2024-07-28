import { Injectable } from '@nestjs/common';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI();

@Injectable()
export class ConversationService {
  private readonly openaiApiKey = 'openai_api_key';

  private userProgress = {};

  public async getChatbotResponse(
    userId: string,
    message: string,
  ): Promise<string> {
    const userLevel = this.userProgress[userId]?.level || 'beginner';
    const prompt = `You are a language learning assistant. Adjust your language to a ${userLevel} level user. User says: ${message}`;

    try {
      // const response = await axios.post(
      //   'https://api.openai.com/v1/engines/davinci-codex/completions',
      //   {
      //     prompt: prompt,
      //     max_tokens: 150,
      //     n: 1,
      //     stop: null,
      //     temperature: 0.7,
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${this.openaiApiKey}`,
      //     },
      //   },
      // );

      // const completion = await openai.chat.completions.create({
      //   messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      //   model: 'davinci-002',
      // });

      // console.log(completion.choices[0]);

      // const botResponse = response.data.choices[0].text.trim();

      this.userProgress[userId] = {
        ...this.userProgress[userId],
        interactions: (this.userProgress[userId]?.interactions || 0) + 1,
      };

      const botResponse =
        "Hello I'm your language learning assistant, how are you?";

      return botResponse;
    } catch (error) {
      console.error('Error interacting with OpenAI:', error);
      throw new Error('Internal server error');
    }
  }

  public getUserProgress(userId: string) {
    return this.userProgress[userId] || {};
  }
}
