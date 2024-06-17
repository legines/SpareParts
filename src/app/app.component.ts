import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  logoArray: string[] = ['assets/SpareParts-black-gold.svg', 'assets/SpareParts-black-text-only.svg', 'assets/SpareParts-black.svg', 'assets/SpareParts-bright-white.svg', 'assets/SpareParts-gold.svg', 'assets/SpareParts-off-white.svg', 'assets/SpareParts-white-text-only.svg', 'assets/SpareParts-purple.svg'];
  logoUrl: string = ''

  constructor() {}

  ngOnInit() {
    this.logoUrl = 'assets/SpareParts-black-gold.svg';
    setInterval(() => {
      let random = Math.floor(Math.random() * this.logoArray.length);
       this.logoUrl = this.logoArray[random];
    }, 2000);
  }
}
