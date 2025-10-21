import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class Post {
  @Input() titolo!: string;
  @Input() testo!: string;
}