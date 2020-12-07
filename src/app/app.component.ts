import { Component } from '@angular/core';
import { searchInputEventArgs } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-profiles';
  input: string;

  getResults(eventArgs: searchInputEventArgs) {
    this.input = eventArgs.input;
  }
}
