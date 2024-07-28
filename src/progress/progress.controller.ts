import { Controller, Get, Query } from '@nestjs/common';
import { ConversationService } from '../conversation/conversation.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  public getUserProgress(@Query('userId') userId: string) {
    const progress = this.conversationService.getUserProgress(userId);
    return { progress };
  }
}
