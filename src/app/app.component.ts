import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import postData from '../assets/data/postData.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, NgFor, PostComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  logoArray: string[] = ['assets/logos/SpareParts-black-gold.svg', 'assets/logos/SpareParts-black.svg', 'assets/logos/SpareParts-bright-white.svg', 'assets/logos/SpareParts-gold.svg', 'assets/logos/SpareParts-off-white.svg', 'assets/logos/SpareParts-white-text-only.svg', 'assets/logos/SpareParts-purple.svg', 'assets/logos/SpareParts-boulder-grey-pearl.svg'];
  logoUrl: string = ''
  postIds;
  posts = postData;
  selectedId: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.logoUrl = 'assets/logos/SpareParts-black-gold.svg';
    setInterval(() => {
      let random = Math.floor(Math.random() * this.logoArray.length);
       this.logoUrl = this.logoArray[random];
    }, 2000);
    this.postIds = this.posts.map(post => ({id: post.id, title: post.postTitle}));
    this.postIds.unshift({id: 0, title: 'Back to top'});
    // this.buildPosts();
  }

  // commenting this out for now, will come back to it later when data is actually on a db instead of in a json file
  // issues compiling with this code in place for some reason
  // buildPosts() {
  //   this.http.get('/assets/data/postData.json').subscribe(data => {
  //     this.posts = data;
  //     this.postIds = this.posts.map(post => ({id: post.id, title: post.postTitle}));
  //   });
  // }

  scrollIntoView() {
    document.getElementById(`${this.selectedId}`).scrollIntoView({behavior: 'smooth'});
    setTimeout(() => {
      this.selectedId = null;
    }, 500);
  }
}
