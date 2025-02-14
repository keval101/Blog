import { Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post.interface';

@Component({
  selector: 'app-blog-card-sm',
  templateUrl: './blog-card-sm.component.html',
  styleUrls: ['./blog-card-sm.component.scss']
})
export class BlogCardSmComponent {
  @Input() post: BlogPost;


  getRandomLinks(): string {
    return `https://picsum.photos/500`
  }

  convertNameIntoLink(title: string): string {
    return title.toLowerCase().replace(/[:.,"'+? ]+/g, '-')
  }

}
