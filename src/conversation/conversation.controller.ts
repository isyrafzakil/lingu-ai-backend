import { Controller, Post, Body } from '@nestjs/common';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  public async handleConversation(
    @Body() body: { userId: string; message: string },
  ) {
    const { userId, message } = body;
    const response = await this.conversationService.getChatbotResponse(
      userId,
      message,
    );
    return { response };
  }
}
