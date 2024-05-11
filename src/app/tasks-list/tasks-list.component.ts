import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Task } from "../../../type";

@Component({
  selector: "app-tasks-list",
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        <button [class.line-through]="task.done" (click)="toggleDoneStatus(task, $event)">
          <!-- bindowanie -->
          {{ task.name }}
        </button>
      </li>
    </ul>
  `,
  styles: ``,
})
export class TasksListComponent {
  @Input({ required: true }) tasks: Task[] = [];

  toggleDoneStatus(task: Task, event: Event) {
    console.log(event);
    task.done = !task.done;
  }
}
