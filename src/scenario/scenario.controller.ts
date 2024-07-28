import { Controller, Get, Query } from '@nestjs/common';

@Controller('scenario')
export class ScenarioController {
  @Get()
  public getScenario(@Query('scenario') scenario: string) {
    const scenarios = {
      restaurant:
        'You are at a restaurant. The waiter asks: What would you like to order?',
      hotel:
        'You are at a hotel reception. The receptionist asks: How can I assist you today?',
    };
    const scenarioPrompt = scenarios[scenario] || 'Scenario not found.';
    return { scenario: scenarioPrompt };
  }
}
