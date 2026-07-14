import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Button } from '../button/button';
import { Userapi } from '../userapi';
import { Modal } from '../modal/modal';
import { FormsModule } from '@angular/forms';

export interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-user-crud',
  imports: [CommonModule, Button, Modal, FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {
  private userapi = inject(Userapi);

  userData = signal<Users[]>([]);
  selectedUser = signal<Users | null>(null);

  isEditMode = signal<boolean>(false);
  showModal = signal<boolean>(false);

  constructor() {
    // Load initial user data from the API
    this.userapi.getUserData().subscribe({
      next: (data) => this.userData.set(data),
      error: (err) => console.error('Error loading users:', err),
    });
  }

  handleEditUser(id: number) {
    const user = this.userData().find((u) => u.id === id);
    if (user) {
      // Create a shallow copy of the user object so we don't mutate list data until saved
      this.selectedUser.set({ ...user });
      this.isEditMode.set(true);
      this.showModal.set(true);
    }
  }

  handleCloseModal() {
    this.selectedUser.set(null);
    this.isEditMode.set(false);
    this.showModal.set(false);
  }

  handleSave() {
    const editedUser = this.selectedUser();
    if (editedUser) {
      // Update the user in the list matching by id
      const updatedUsers = this.userData().map((user) =>
        user.id === editedUser.id ? editedUser : user,
      );
      this.userData.set(updatedUsers);
    }
    this.handleCloseModal();
  }

  handleDeleteUser(id: number) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const data = this.userData()?.filter((user) => user.id !== id) || [];
      this.userData.set(data);
      console.log('User deleted, updated list:', this.userData());
    }
  }
}
