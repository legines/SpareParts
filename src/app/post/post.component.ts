import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post;
  emptyTable: boolean;
  lightBoxPic = null;

  constructor() {}
  
  ngOnInit() {
    this.emptyTable = Object.keys(this.post.tableData).length === 0;
  }

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
