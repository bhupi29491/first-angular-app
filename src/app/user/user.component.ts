import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.id);
  }
}
