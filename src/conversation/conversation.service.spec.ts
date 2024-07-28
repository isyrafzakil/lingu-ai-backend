import { Test, TestingModule } from '@nestjs/testing';
import { ConversationService } from './conversation.service';

describe('ConversationService', () => {
  let service: ConversationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationService],
    }).compile();

    service = module.get<ConversationService>(ConversationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a chatbot response', async () => {
    jest
      .spyOn(service, 'getChatbotResponse')
      .mockResolvedValue('Hello, how can I help you?');
    const response = await service.getChatbotResponse('user1', 'Hello');
    expect(response).toBe('Hello, how can I help you?');
  });
});
