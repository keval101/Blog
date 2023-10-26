import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs = []
  blogType: string;
  constructor(
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private title: Title
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['type']) {
        this.blogType = params['type'];
        this.title.setTitle(`${this.capitalizeFirstLetter(this.blogType)} Blogs`)
        const type = params['type']
        this.dataSharingService.getBlogByTypes(type.toLowerCase()).subscribe(blogs => {
          this.blogs = blogs.reverse();
        })
      }
    })
  }

  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}
