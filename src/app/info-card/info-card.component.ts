import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../info/info.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() data: userData;
  name: string;
  userName: string;
  profileImage: string;
  profileLink: string;
  bio: string;
  blog: string;
  followers: number;
  reposCount: number;

  constructor() {}

  ngOnChanges(changes) {
    let {
      name,
      login,
      avatar_url,
      followers,
      html_url,
      public_repos,
      bio,
      blog
    } = this.data;
    this.name = name;
    this.userName = login;
    this.userName = login;
    this.followers = followers;
    this.reposCount = public_repos;
    this.profileImage = avatar_url;
    this.profileLink = html_url;
    this.bio = bio;
    this.blog = blog;
  }

  ngOnInit(): void {}
}
