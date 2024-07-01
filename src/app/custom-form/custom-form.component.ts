import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent {
  outputText: string = ''; // Initialize outputText with an empty string

  // Example function to update outputText
  updateOutputText(text: string) {
    this.outputText = text;
  }
}
