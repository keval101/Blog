import { Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() post: BlogPost;

  ngOnInit(): void {

  }

  getRandomLinks(): string {
    return `https://picsum.photos/500`
  }

  convertNameIntoLink(title: string): string {
    return title.toLowerCase().replace(/[:,."'+ ]+/g, '-')
  }

}
