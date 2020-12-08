import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() searchInput: string;
  userFound: boolean = true;
  data = {};

  constructor() {}

  showResults() {
    axios
      .get(`https://api.github.com/users/${this.searchInput}`)
      .then(res => {
        this.userFound = true;
        console.log(res.data);
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
      })
      .catch(err => {
        this.userFound = false;
        console.log(err);
      });
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
