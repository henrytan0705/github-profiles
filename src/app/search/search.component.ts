import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchInput = new EventEmitter();

  constructor() {}

  submitInput(f) {
    this.searchInput.emit({ input: f.value.username });
  }

  ngOnInit(): void {}
}

export interface searchInputEventArgs {
  input: string;
}
