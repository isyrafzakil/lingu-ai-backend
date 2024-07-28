import { Test, TestingModule } from '@nestjs/testing';
import { ProgressController } from './progress.controller';
import { ConversationModule } from '../conversation/conversation.module';

describe('ProgressController', () => {
  let controller: ProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgressController],
      imports: [ConversationModule],
    }).compile();

    controller = module.get<ProgressController>(ProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
