import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-submit-text",
  standalone: true,
  imports: [],
  template: `
    <div>
      <input
        #searchInput
        type="text"
        (keyup.enter)="submitText.emit(searchInput.value); searchInput.value = ''"
        class="border-b border-b-orange-400 outline-none"
      />
      <button
        (click)="submitText.emit(searchInput.value); searchInput.value = ''"
        class="border border-orange-400 ml-4 px-4"
      >
        Add task
      </button>
    </div>
  `,
  styles: ``,
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
