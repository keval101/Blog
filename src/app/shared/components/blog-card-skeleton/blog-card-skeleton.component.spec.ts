import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardSkeletonComponent } from './blog-card-skeleton.component';

describe('BlogCardSkeletonComponent', () => {
  let component: BlogCardSkeletonComponent;
  let fixture: ComponentFixture<BlogCardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(BlogCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
