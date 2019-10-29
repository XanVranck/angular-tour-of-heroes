import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

fdescribe('MessageService', () => {
  let messageService: MessageService;
  
  beforeEach(() => {
    messageService = new MessageService();
  });

  it('should save message', () => {
      messageService.add('test')

      expect(messageService.messages).toEqual(['test']);
  });

  it('should clear messages', () => {
      messageService.add('Herpa Derp')
      expect(messageService.messages).toEqual(['Herpa Derp']);

      messageService.clear()
      expect(messageService.messages).toEqual([])
  });
});
