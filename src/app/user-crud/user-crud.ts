import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Button } from '../button/button';
import { Userapi } from '../userapi';
import { Modal } from '../modal/modal';
import { form, FormField, required, email } from '@angular/forms/signals';

export interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-user-crud',
  imports: [CommonModule, Button, Modal, FormField],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {
  private userapi = inject(Userapi);

  userData = signal<Users[]>([]);

  // Writable signal holding the user currently being edited
  selectedUser = signal<Users>({ id: 0, name: '', email: '', username: '' });

  // Signal Form definition bound to the selectedUser signal
  userForm = form(this.selectedUser, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.username, { message: 'Username is required' });
  });

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
      // Create a shallow copy of the user object and set the signal
      this.selectedUser.set({ ...user });
      this.isEditMode.set(true);
      this.showModal.set(true);
    }
  }

  handleCloseModal() {
    // Reset selected user to default values
    this.selectedUser.set({ id: 0, name: '', email: '', username: '' });
    this.isEditMode.set(false);
    this.showModal.set(false);
  }

  handleSave() {
    const editedUser = this.selectedUser();
    // Update the user in the list matching by id
    const updatedUsers = this.userData().map((user) =>
      user.id === editedUser.id ? editedUser : user,
    );
    this.userData.set(updatedUsers);
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
