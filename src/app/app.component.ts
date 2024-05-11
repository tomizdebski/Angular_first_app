import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { Task } from "../../type";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor, TasksListComponent],
  template: `
    <h1 class="text-orange-500 bg-black py-4 text-xl text-center">
      Welcome to {{ title }}!
    </h1>
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
  toggleDoneStatus(task: Task, event: Event) {
    console.log(event);
    task.done = !task.done;
  }
}
