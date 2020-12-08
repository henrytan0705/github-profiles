import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() searchInput: string;
  userFound: boolean = false;
  displayNotFound: boolean = false;
  data = {};
  loading: boolean = false;

  constructor() {}

  showResults() {
    setTimeout(() => {
      this.loading = true;
      this.userFound = false;
      this.displayNotFound = false;
    }, 0);

    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${this.searchInput}`)
        .then(res => {
          let {
            name,
            login,
            avatar_url,
            followers,
            html_url,
            public_repos,
            bio,
            blog
          } = res.data;

          this.data = {
            name,
            login,
            avatar_url,
            followers,
            html_url,
            public_repos,
            bio,
            blog
          };
          this.loading = false;
          this.userFound = true;
        })
        .catch(err => {
          this.loading = false;
          this.displayNotFound = true;
          this.userFound = false;
          console.log(err);
        });
    }, 1000);
  }

  ngOnChanges(changes) {
    if (!changes['searchInput'].firstChange) {
      this.showResults();
    }
  }

  ngOnInit(): void {}
}

export interface userData {
  name: string;
  login: string;
  followers: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  bio: string;
  blog: string;
}
