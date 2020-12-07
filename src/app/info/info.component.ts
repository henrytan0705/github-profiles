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
  name: string;
  userName: string;
  followers: number;
  reposCount: number;
  profileImage;

  constructor() {}

  showResults() {
    axios.get(`https://api.github.com/users/${this.searchInput}`).then(res => {
      console.log(res.data);
      let {
        name,
        login,
        avatar_url,
        followers,
        html,
        url,
        public_repos
      } = res.data;
      this.name = name;
      this.userName = login;
      this.followers = followers;
      this.reposCount = public_repos;
      this.profileImage = avatar_url;
    });
  }

  ngOnChanges(changes) {
    if (!changes['searchInput'].firstChange) {
      this.showResults();
    }
  }

  ngOnInit(): void {}
}
