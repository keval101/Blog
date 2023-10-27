import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, filter, map, throwError } from 'rxjs';
import { BlogPost } from '../interfaces/blog-post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {


  // path = '/assets/data/data.json'
  path = `https://keval101.github.io/blog-json/db.json`;

  changedSlides$ = new Subject();
  blogs: BlogPost[] = [];
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any) { }

  getBlogs():  Observable<any> {
    return this.http.get(this.path).pipe(map((res: any) => res?.blog))
  }

  getBlogDetail(blogId: string | number): Observable<any> {
    return this.http.get(this.path)
    .pipe(
      map((res: any) => {
        return res.blog.find(item => item.id == blogId);
      }))
  }

  getBlogByTypes(blogType: string): Observable<any> {
    return this.http.get(this.path)
    .pipe(
      map((x: any) => {
        
        return x?.blog.filter(x => {
          const tags = x?.tags?.join(',').toLowerCase()
          return tags.includes(blogType)
        })
      }))
  }

}
