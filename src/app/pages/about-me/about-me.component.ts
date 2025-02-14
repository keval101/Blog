import { Component } from '@angular/core';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private metaService: MetaTagsService) {}

  ngOnInit(): void {
    const meta = {
      title: 'About Us | Quick Blogs - Discover Our Story and Mission',
      description: 'Learn about Quick Blogs\' journey, team, and commitment to providing valuable content. Explore our mission to inform, inspire, and engage.',
      keywords: 'About Us, Quick Blogs, Our Story, Mission Statement, Team, Values, Purpose, Content Creation, Information Hub, Inspire and Engage',
    }
    this.metaService.updateMetaTags(meta)
  }
}
