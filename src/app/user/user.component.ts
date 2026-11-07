import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath(): string {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser(user: any): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
