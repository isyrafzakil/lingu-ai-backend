import { Module } from '@nestjs/common';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { ConversationModule } from 'src/conversation/conversation.module';

@Module({
  controllers: [ProgressController],
  providers: [ProgressService],
  imports: [ConversationModule],
})
export class ProgressModule {}
