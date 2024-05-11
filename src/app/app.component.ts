import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { SubmitTextComponent } from "./submit-text/submit-text.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor, TasksListComponent, SubmitTextComponent],
  styles: [
    `
      input:focus + button {
        @apply text-orange-400;
      }
    `,
  ],
  template: `
    <h1 class="text-orange-500 bg-black py-4 text-xl text-center">
      Welcome to {{ title }}!
    </h1>
    <app-submit-text (submitText)="addTask($event)" />
    <app-tasks-list [tasks]="tasks" />
  `,
})
export class AppComponent {
  title = "01-components-basics-and-template-syntax1";
  tasks = [
    { name: "task 1", done: false },
    { name: "task 2", done: true },
    { name: "task 3", done: false },
  ];
  addTask(name: string) {
    this.tasks.push({ name, done: false });
  }
}
