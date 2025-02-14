import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/app/shared/interfaces/blog-post.interface';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  public blog: BlogPost;
  isBrowser = false;
  relatedPost: BlogPost[] = []
  videoLink: any;
  constructor(
    private dataService: DataSharingService, 
    private route: ActivatedRoute,
    private metaService: MetaTagsService,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: any) {
      this.isBrowser = isPlatformBrowser(this.platformId)
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {   
      this.dataService.getBlogDetail(params['id']).subscribe(blog => {
        this.blog = blog;
        this.videoLink =  this.blog?.youtube?.link ? this.sanitizer.bypassSecurityTrustResourceUrl(this.blog.youtube.link) : '';
        
        this.dataService.getBlogByTypes(this.blog.tags.join(',').toLowerCase()).subscribe(blogs => {
          this.relatedPost = blogs.filter(x => x.id != this.blog.id)
        })
        
        const meta = {
          title: this.blog?.meta?.title ?? this.blog?.title,
          description: this.blog?.meta?.description ?? this.blog?.intro,
          keywords: this.blog?.meta?.keywords ??  '',
        }
        this.metaService.updateMetaTags(meta, this.blog?.thumbnail)
        this.metaService.updateStructuredData(this.blog)
      })
    })
    }

    getFilterBlogs(type: string) {
      this.router.navigate(['/blogs', type.toLocaleLowerCase()])
    }
}
