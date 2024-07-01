import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() bottomPics: string[];
  @Input() contentOne: string;
  @Input() contentTwo: string;
  @Input() midPicsOne: string[];
  @Input() midPicsTwo: string[];
  @Input() postTitle: string;
  @Input() tableData;
  @Input() topPics: string[];
  @Input() post;
}
