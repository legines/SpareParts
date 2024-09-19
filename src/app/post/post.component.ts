import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post;
  lightBoxPic = null;

  constructor() {}
  
  topPicSource(pic, size) {
    return `../../../assets/post-${this.post.id}/${pic}_${size}.png`;
  }

  openPic(pic) {
    this.lightBoxPic = this.topPicSource(pic, 'big');
    document.getElementById(`lightbox-${this.post.id}`).classList.add('show');
  }

  closePic() {
    document.getElementById(`lightbox-${this.post.id}`).classList.remove('show');
  }
}
