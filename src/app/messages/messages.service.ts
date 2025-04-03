import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();

  addMessages(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
