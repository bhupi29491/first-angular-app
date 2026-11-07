import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // get imagePath(): string {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser(user: any): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
