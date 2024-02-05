import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID } from '@angular/core';
import { DataSharingService } from '../../service/data-sharing.service';
import { debounceTime, map, take, takeLast, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { BlogPost } from '../../interfaces/blog-post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  @Input() initSlide = false;
  @Input() post: BlogPost;
  isBrowser = false;

  constructor(
    private dataSharingService: DataSharingService,
    @Inject(PLATFORM_ID) private platformId: any) {
      this.isBrowser = isPlatformBrowser(platformId);
    }

  getRandomLinks(): string {
    return `https://picsum.photos/500`
  }

  ngOnInit(): void {
    //init first slide
    this.dataSharingService.changedSlides$.next(true);

    this.dataSharingService.changedSlides$.pipe(tap(x => this.initSlide = false)).subscribe((res: boolean) => {
      if(this.isBrowser) {
        setTimeout(() => {
          if(res) this.initSlide = res;
        }, 200);
      }
    })
  }

  convertNameIntoLink(title: string): string {
    return title.toLowerCase().replace(/[:.,"'+? ]+/g, '-')
  }
  
  getReadMoreLink(title: string): string {
    return title.split(':')[0]
  }
}
