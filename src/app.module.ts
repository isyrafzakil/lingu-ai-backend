import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversationModule } from './conversation/conversation.module';
import { ProgressModule } from './progress/progress.module';
import { ScenarioModule } from './scenario/scenario.module';

@Module({
  imports: [ConversationModule, ProgressModule, ScenarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
