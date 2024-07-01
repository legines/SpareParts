import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor, PostComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  logoArray: string[] = ['assets/logos/SpareParts-black-gold.svg', 'assets/logos/SpareParts-black.svg', 'assets/logos/SpareParts-bright-white.svg', 'assets/logos/SpareParts-gold.svg', 'assets/logos/SpareParts-off-white.svg', 'assets/logos/SpareParts-white-text-only.svg', 'assets/logos/SpareParts-purple.svg'];
  logoUrl: string = ''
  posts;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.logoUrl = 'assets/logos/SpareParts-black-gold.svg';
    setInterval(() => {
      let random = Math.floor(Math.random() * this.logoArray.length);
       this.logoUrl = this.logoArray[random];
    }, 2000);
    this.buildPosts();
  }

  buildPosts() {
    this.http.get('/assets/data/postData.json').subscribe(data => {
      this.posts = data;
    });
  }
}
