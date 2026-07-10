import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp {
  items: { value: string; id: number; markasread: boolean }[] = [];
  inputdata: string = "";

  AddTask(data: string) {
    if (data.trim() !== "") {
      const id = this.items.length + 1;
      this.items.push({ value: data, id: id, markasread: false });
      this.inputdata = "";
    }
  }

  deleteTask(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  markAsRead(id: number) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.markasread = !item.markasread;
    }
  }
}