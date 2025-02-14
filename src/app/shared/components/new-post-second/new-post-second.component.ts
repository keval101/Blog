import { Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post.interface';

@Component({
  selector: 'app-new-post-second',
  templateUrl: './new-post-second.component.html',
  styleUrls: ['./new-post-second.component.scss']
})
export class NewPostSecondComponent {
  @Input() post: BlogPost;

  
  convertNameIntoLink(title: string): string {
    return title.toLowerCase().replace(/[:.,"'+? ]+/g, '-')
  }

  getReadMoreLink(title: string): string {
    return title.split(':')[0]
  }
}
